import React, { useState } from 'react';
import './App.css';
import AlertButton from './AlertButton'

const buttons = ['easy', 'okay', 'difficult', 'too_difficult']



function App() {
  const [click, setClick] = useState(false)
  console.log(click)
  return (
    <div className= "App">
      {buttons.map(element => (
        <AlertButton 
          isClicked = {click}
          alert = {element} 
          clickHandler = {() => { setClick(true); window.alert("That was " + element)
      }} />
      ))}</div>
  );
}



export default App;
