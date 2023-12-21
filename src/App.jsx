import { useState } from "react";
import "./App.css";

function App() {
  const [greetingtext, setGreetingText] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{greetingtext}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreetingText("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreetingText("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreetingText("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
