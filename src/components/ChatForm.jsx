/* eslint-disable no-undef */
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

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

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Control
      type="text"
      value={message}
      onChange={handleChange}
      placeholder="Type your message..."
    />
    
    <Button variant="primary" type="submit">
      Send
    </Button>
  </Form>
  );
}

export default ChatForm;

