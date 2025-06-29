import React, { useState } from "react";
import ChatBox from "./chatbox";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (username.trim()) {
      setStarted(true);
    }
  };

  return (
    <div className="App">
      {!started ? (
        <div className="login">
          <h2>Enter your name to join the chat</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
          />
          <button onClick={handleStart}>Join Chat</button>
        </div>
      ) : (
        <ChatBox username={username} />
      )}
    </div>
  );
}

export default App;
