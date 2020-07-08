import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //Initialization of Hooks
  const[count, setCount] = useState(0);
  const[buttonName, setButton] = useState("No button Pressed Yet");

  return (
    <div className="App">
      <h1>Hey there this is me</h1>
      <p>Here is some shit to click</p>
      <button onClick={() => setCount(count+1)}>Click Here!</button>
      <p>Button has been clicked {count} times</p>
      <br></br>
      <div className="ButtonField">
        <h1>Ok this is the button field</h1>
        <button onClick={()=> setButton("Button1")}>Button 1</button>
        <p>{buttonName} has been pressed</p>
      </div>
    </div>

    
  );
}

export default App;
