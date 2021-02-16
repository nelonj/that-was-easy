import React from 'react';
import './App.css';
import AlertButton from './AlertButton'

const buttons = ['easy', 'okay', 'difficult', 'too_difficult', 'medium', 'easy']



function App() {
  
  return (
    <div className= "App">
      {buttons.map(element => (
        <AlertButton 
          alert = {element} 
          clickHandler = {() => window.alert("That was " + element)} /> 
      ))}
    </div>
  );
}



export default App;
