/* eslint-disable no-undef */
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';


function ChatForm({ currentUser }) {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(message.trim() === ''){
      try {
        await addDoc(collection(db, 'messages'), {
          text: message,
          senderId: currentUser.uid,
          timestamp: serverTimestamp()
        });
      
      } catch (error) {
        console.error('Error sending message:', error.message);
      }
    };
currentUser(message);
setMessage('');
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleChange} placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatForm;
