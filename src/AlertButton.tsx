import React from 'react'

type ButtonProps = {
    alert: string
    clickHandler: ()=> void   //means its type is 'function'
}

// function ClassCheck (name) {
//     if (name.includes(' ')) {
//         return 
//     }
// }

function AlertButton (props: ButtonProps) {
    return (
        <button 
            className = {props.alert} 
            onClick = {props.clickHandler} >
        {props.alert} 
        </button>
    )
}

export default AlertButton


// Exercise 2b: Passing a function into the event listener
// Adapt your existing solution in order to define a function which takes a single parameter and creates an alert box saying that was [parameter]. Now pass this function to each button.

