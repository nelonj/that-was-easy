import React from 'react';
import './App.css';
import AlertButton from './AlertButton'


function App() {

  return (
    <div className= "App">
      <AlertButton alert = 'easy'  />
      <AlertButton alert = 'okay' />
      <AlertButton alert = 'difficult'  />
      <AlertButton alert = 'too_difficult'  />
      

      {/* <button 
        className="button1" 
        onClick={() => alert("That was easy")}
        > easy </button>
      <button 
        className="button2" 
        onClick={() => alert("That was okay")}
        > okay </button>
      <button 
        className="button3" 
        onClick={() => alert("That was difficult")}
        > difficult </button>
      <button 
        className="button4" 
        onClick={() => alert("That was too difficult")}
        > too difficult </button> */}
    </div>
  );
}

export default App;
