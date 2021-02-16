import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  // const buttons = ['easy', 'okay', 'difficult', 'too difficult'];
  // buttons.forEach(element => <button></button>)
  
  return (
    
    <div className="App">
       
      <button 
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
        > too difficult </button>
    </div>
  );
}

export default App;
