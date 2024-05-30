import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import SendMessage from './ChatForm';
import ChatRoom from './ChatRoom';

function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <div>
          <ChatRoom />
          <SendMessage currentUser={user} />
        </div>
      ) : (
        <div>
          <h2>Please log in to use the chat.</h2>
        </div>
      )}
    </div>
  );
}

export default Chat;
