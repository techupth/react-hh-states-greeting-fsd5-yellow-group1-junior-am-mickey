import "./App.css";
import { useState } from "react";

function App() {
  let [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  function handleThaiClick() {
    setGreetingMessage("สวัสดี!");
  }

  function handleEnglishClick() {
    setGreetingMessage("Hi!");
  }

  function handleChineseClick() {
    setGreetingMessage("你好!");
  }

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={handleThaiClick}>สวัสดี!</button>
        <button onClick={handleEnglishClick}>Hi!</button>
        <button onClick={handleChineseClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
