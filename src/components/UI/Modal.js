import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

function Backdrop(props)
{
    return (
        <div className={classes.backdrop}></div>
    )
}

function Overlay(props)
{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

function Modal(props) 
{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<Overlay >{props.children}</Overlay>, portalElement)}
        </>
    )
}

export default Modal