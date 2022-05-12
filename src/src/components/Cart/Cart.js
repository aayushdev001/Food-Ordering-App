import React from 'react';
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import CartItem from "./CartItem"
import Checkout from "./Checkout"

function Cart(props) 
{

    const CartCtx = React.useContext(CartContext);
    const totalAmount = CartCtx.totalAmount;
    const hasItems = CartCtx.items.length > 0;

    function cartItemRemovehandler(id)
    {
        CartCtx.removeItem(id);
    }
    function cartItemAddhandler(item)
    {
        CartCtx.addItem(item);
    }

    const [showCheckout, setShowCheckout] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [didSubmit, setDidSumbit] = React.useState(false)

    function orderHandler()
    {
        setShowCheckout(true)
    }

    async function submitOrderHandler(userData)
    {
        setIsSubmitting(true);
        await fetch("https://single-planet-274106-default-rtdb.firebaseio.com/oders.json",
        {method: "POST",
        body: JSON.stringify({
            userData: userData,
            orderedItems: CartCtx.items
        })})
        setIsSubmitting(false);
        setDidSumbit(true);
        CartCtx.clearCart();
    }

    const cartItems = <ul className={classes["cart-items"]} >
        {
            CartCtx.items.map((item) => {return( 
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemovehandler.bind(null,item.id)} onAdd={cartItemAddhandler.bind(null,item)}/>)})
        }
    </ul>
    const cartModalContent = <>
        {cartItems}
            <div className={classes.total} >
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {showCheckout && <Checkout onCheckout={submitOrderHandler} onCancel={props.onclick}/>}
            {!showCheckout && <div className={classes.actions}>
                <button onClick={props.onclick} className={classes["button-alt"]}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>}
    </>

        const isSubmittingModalContent = <p>Sending order data...</p>
        const didSubmitModalContent = <>
        <p>Succesfully sent the order</p>
            <div className={classes.actions}>
                <button onClick={props.onclick} className={classes["button-alt"]}>Close</button>
            </div>
        </>

    return (
        <Modal>
            {!didSubmit && !isSubmitting && cartModalContent}
            {!didSubmit && isSubmitting && isSubmittingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart