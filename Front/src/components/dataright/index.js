import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import Walter from "../../images/walter.jpg";
import {
  Container,
  Name,
  NavBar,
  Input,
  Footer,
  Submit,
} from "./style";

const socket = io(process.env.REACT_APP_BACK_URL);

export default function DataRight() {
  const location = useLocation();
  const { user } = location.state || {};

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("receive_message");
  }, []);


  useEffect(() => {
    if (user?.messages) {
      setMessages(user.messages);
    } else {
      setMessages([]);
    }
  }, [user]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const msgData = {
      text: message,
      time: new Date().toLocaleTimeString(),
    };
    socket.emit("send_message", msgData);
    setMessage("");
  };

  return (
    <Container>
      <NavBar>
        <img src={user?.image || Walter} alt={user?.name || "Chat"} />
        <Name>{user?.name || "Desconhecido"} - Group</Name>
      </NavBar>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.text} <small>({msg.time})</small>
          </li>
        ))}
      </ul>

      <Footer>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <Submit onClick={sendMessage}>Enviar</Submit>
      </Footer>
    </Container>
  );
}
