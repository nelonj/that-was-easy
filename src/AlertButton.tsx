import React, { useState } from 'react'

type ButtonProps = {
    alert: string
    clickHandler: () => void
    isClicked: string  //means its type is 'function'

}

// function ClassCheck (name) {
//     if (name.includes(' ')) {
//         return 
//     }
// }

function AlertButton(props: ButtonProps) {
    const [individualCount, setIndividualCount] = useState(0)
    let addClass;
    if (props.isClicked === "italic") {
        addClass = "hasBeenClicked"
    } else { addClass = "" }
    function myFunction(prevCount: number) {
        return prevCount+1
     }

    return (
        <button
            className={props.alert + " " + addClass}
            onClick={() => {
                props.clickHandler()
                setIndividualCount(myFunction)
            }} >
            {props.alert} :
            {individualCount}
        </button>

    )
}

export default AlertButton


// Exercise 2b: Passing a function into the event listener
// Adapt your existing solution in order to define a function which takes a single parameter and creates an alert box saying that was [parameter]. Now pass this function to each button.

