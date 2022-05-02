import React from 'react';
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import CartItem from "./CartItem"

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

    const cartItems = <ul className={classes["cart-items"]} >
        {
            CartCtx.items.map((item) => {return( 
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemovehandler.bind(null,item.id)} onAdd={cartItemAddhandler.bind(null,item)}/>)})
        }
    </ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total} >
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onclick} className={classes["button-alt"]}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart