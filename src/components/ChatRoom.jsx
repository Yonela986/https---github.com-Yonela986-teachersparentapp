import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as per your project structure
import ChatForm from './ChatForm';

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedMessages = [];
      snapshot.forEach((doc) => {
        updatedMessages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(updatedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Chats</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <ChatForm onSendMessage={ChatForm} />
    </div>
  );
}

export default ChatRoom;
