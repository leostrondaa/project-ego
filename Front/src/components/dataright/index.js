import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { io } from 'socket.io-client';
import UserContext from '../../contexts/UserContext';
import Walter from '../../images/walter.jpg';
import {
  Container,
  Name,
  NavBar,
  Input,
  Footer,
  Submit
} from './style';

const socket = io("http://10.20.21.220:3001");




export default function DataLeft() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const msgData = {
      text: message,
      time: new Date().toLocaleTimeString()
    };

    socket.emit("send_message", msgData);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <Container>
      <NavBar>
        <img src={Walter} alt="Walter White" />
        <Name>Walter White - Group</Name>
      </NavBar>

      <ul >
        {messages.map((msg, index) => (
          <li key={index}>{msg.text} <small>({msg.time})</small></li>
        ))}
      </ul>

      <Footer>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Digite sua mensagem..."
        />
        <Submit onClick={sendMessage}>E</Submit>
      </Footer>
    </Container>
  );
}
