import classes from "./Checkout.module.css"
import React from "react"

function isEmpty(input) 
{
    return input.trim().length === 0;
}
function isSixChars(input)
{
    return input.trim().length >=6;
}

function Checkout(props)
{

    const nameRef = React.useRef();
    const addressRef = React.useRef();
    const pinRef = React.useRef();

    const [formInputValidity, setFormInputValidity] = React.useState({
        name: true,
        address: true,
        pin: true
    })

    function checkoutHandler(event) 
    {
        event.preventDefault();
        const name=nameRef.current.value;
        const address=addressRef.current.value;
        const pin=pinRef.current.value;
        console.log(name, address, pin)

        const nameIsValid = !isEmpty(name);
        const addressIsValid = !isEmpty(address);
        const pinIsValid = isSixChars(pin);

        setFormInputValidity({
            name: nameIsValid,
            address: addressIsValid,
            pin: pinIsValid
        })

        const formIsValid = nameIsValid && addressIsValid && pinIsValid
        if(!formIsValid) {return;}
        props.onCheckout({
            name: name,
            address: address,
            pin: pin
        })
    }
    return(
        <form className={classes.form} onSubmit={checkoutHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!formInputValidity.name && <p className={classes.error}>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Address</label>
        <input type='text' id='street' ref={addressRef}/>
        {!formInputValidity.address && <p className={classes.error}>Please enter a valid address</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Pin Code</label>
        <input type='text' id='postal' ref={pinRef}/>
        {!formInputValidity.pin && <p className={classes.error}>Please enter valid pincode</p>}
      </div>
    
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
    )
}

export default Checkout