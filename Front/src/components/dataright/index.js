import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import Walter from "../../images/walter.jpg";
import { Container,UsersList, Name, NavBar, Input, Footer, Submit, Msg, Void } from "./style";


const socket = io("http://localhost:3001");

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
      {user ? (
        <>
          <NavBar>
            <img src={user?.image} alt={user?.name} />
            <Name>{user?.name} - Group</Name>
          </NavBar>

          {messages.length === 0 ? (
            <span>Nenhuma mensagem ainda.</span>
          ) : (
            <UsersList>
              {messages.map((msg, index) => (
                <Msg key={index}>
                  {msg.text} <small>({msg.time})</small>
                </Msg>
              ))}
            </UsersList>
          )}

          <Footer>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
            />
            <Submit onClick={sendMessage}>➤</Submit>
          </Footer>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
