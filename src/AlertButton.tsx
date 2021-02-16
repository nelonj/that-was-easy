import React from 'react'

type ButtonComponents = {
    alert: string
}


function AlertButton ({alert}: ButtonComponents) {
    return (
        <button 
            className = {alert} >
            {/* // onClick = {() => window.alert("That was" + " " + alert)} >  */}
        {alert} 
        </button>
    )
}

export default AlertButton