/* eslint-disable no-undef */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ChatForm({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      try {
        await onSendMessage(message);
        setMessage(""); // Clear the input after successfully sending the message
      } catch (error) {
        console.error("Error sending message:", error.message);
        // Handle the error here, e.g., display an error message to the user
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="chat-form">
      <Form.Group>
        <Form.Control
          type="text"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={!message.trim()}
        className="send-button"
      >
        Send
      </Button>
    </Form>
  );
}

export default ChatForm;
