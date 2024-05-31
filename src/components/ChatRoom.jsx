/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import ChatForm from "./ChatForm";
import { Container } from "react-bootstrap";

function ChatRoom({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "messages"),
      where("senderId", "==", currentUser.uid),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const updatedMessages = [];
        snapshot.forEach((doc) => {
          updatedMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(updatedMessages);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [currentUser]);

  const sendMessage = async (message) => {
    if (!currentUser) {
      console.error("User not authenticated.");
      return;
    }
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        senderId: currentUser.uid,
        timestamp: serverTimestamp(), // Or use serverTimestamp() if you have it imported
      });
    } catch (error) {
      console.error("Error sending message:", error.message);
      setError(error.message);
    }
  };
  if (!currentUser) {
    return <p>User not authenticated</p>;
  }
  if (loading) return <p>Loading messages...</p>;
  //checj for error and render the error message
  if (error) return <p>Error: {error.message || JSON.stringify(error)}</p>;

  return (
    <Container>
      <h1>Chats</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <ChatForm currentUser={currentUser} onSendMessage={sendMessage} />
    </Container>
  );
}

export default ChatRoom;
