import React from "react"
import classes from "./MealItemform.module.css"
import Input from "../../UI/Input"

function MealItemForm(props) 
{

    const amountInputRef = React.useRef()

    function submitFormHandler(event)
    {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        props.onAddToCart(enteredAmountNumber)
    }

    return(
        <form className={classes.form} onSubmit={submitFormHandler} >
        <Input
            ref={amountInputRef}
            label="Amount" 
            input={{
                id: "Amount",
                type: "number",
                min: "1",
                max: "5",
                step: "1" ,
                defaultValue: "1"
            }}
        />
        <button>+ Add</button>
    </form>
    )
}

export default MealItemForm