// src/Chat.tsx
import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chat: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:8000", {
        question: input,
      });
      const botMessage = response.data.answer;

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botMessage },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
