import React, { useState } from "react";

const ChatBox = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  const handleSend = () => {
    if (msg.trim()) {
      const newMessage = {
        user: username,
        text: msg,
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMsg("");
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat Room</h2>
      <div className="chat-box">
        {messages.map((m, index) => (
          <div
            key={index}
            className={`message ${m.user === username ? "own" : ""}`}
          >
            <span className="meta">
              <strong>{m.user}</strong> @ {m.time}
            </span>
            <div>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type a message"
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
