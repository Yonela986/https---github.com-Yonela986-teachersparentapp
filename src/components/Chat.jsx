import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import 'firebase/database';
// import ChatForm from './ChatForm';
import ChatRoom from './ChatRoom';
import Header from './Header';


function Chat() {
  const [user] = useAuthState(auth);

  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
        {user ? (
          <>
          <Header user={user} />
            <ChatRoom  currentUser={user} />
         
          </>
        ) : (
          <Alert variant="info">Please log in to use the chat.</Alert>
        )}
      </Col>
    </Row>
  </Container>
  );
}

export default Chat;
