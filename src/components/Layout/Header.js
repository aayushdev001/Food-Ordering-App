import React from 'react';
import img from '../../assets/header.webp'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


 function Header(props) 
 {
    return (
        <>
        <header  className={classes.header} >
            <h1>React Meals</h1>
            < HeaderCartButton onclick={props.onclick} />
        </header>
        <div className={classes['main-image']} >
            <img src={img} ></img>
        </div>
        </>
    )
 }

 export default Header