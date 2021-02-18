import React, { useState } from 'react';
import './App.css';
import AlertButton from './AlertButton'

const buttons = ['easy', 'okay', 'difficult', 'too_difficult']



function App() {
  
  const [font, setFont] = useState("normal")
  const [count, setCount] = useState(0)
  
  return (
    <div className = 'App'>
    <div className = 'Counter'> Counter: {count} </div>
    <div className= "Buttons">
      
      {buttons.map(element => (
        <AlertButton 
          isClicked = {font}
          alert = {element} 
          
          clickHandler = {() => {
            setCount(prevValue => prevValue + 1)

            if (font === "normal") {
              setFont("italic");
              }
            else if (font ==="italic") {
              setFont("normal");
            } 
            // window.alert("That was " + element)
      }} />
      
      ))}
    
      
      </div>
      </div>
  );
}



export default App;
