import React from 'react';
import classes from'./Modol.module.css'
import ReactDOM from 'react-dom';


const BackDrop = props=>{
    return <div onClick={props.onConfirm} className={classes.backdrop} />
}
function Modal(props) {
    return (
        <div className={classes.modal} >
            <header className={classes.header}>
            <h1 className={classes.title}>{props.title}</h1>
            <button className={classes.btn} onClick={props.onConfirm}>okay</button>
            </header>
           
            
        </div>
    );
}

const ErrorModal=(props)=>{
    return(
        <>
        {
            ReactDOM.createPortal(
                <Modal title={props.title} onConfirm={props.onConfirm}/>,
                document.getElementById('modal-root')

            )
        }
           {
            ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdop')
            )
        }
        </>
    )
}

export default ErrorModal;