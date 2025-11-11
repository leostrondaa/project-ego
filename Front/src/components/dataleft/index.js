import React from "react";
import { useNavigate } from "react-router-dom";
import Walter from "../../images/walter.jpg";
import Jessie from "../../images/jessie.jpg";
import Jane from "../../images/jane.jpg";
import {
  Container,
  ButtonChat,
  Title,
  Name,
  Text,
  DivData,
  UsersList,
} from "./style";

export default function DataLeft() {
  const navigate = useNavigate();

  const users = [
    {
    id: 1,
    name: "Walter White",
    text: "I hate comunism",
    image: Walter,
    messages: [
      { id: 1, text: "Say my name", time: "10:00" },
      { id: 2, text: "You're goddamn right", time: "10:05" },
    ],
  },
    { id: 2, name: "Jessie Pinkman", text: "rosinha", image: Jessie },
    { id: 3, name: "Jane Margolis", text: "tô confusa", image: Jane },
  ];
  

  const openChat = (user) => {
    navigate("/home", { state: { user } });
  };

  return (
    <Container>
      <Title>Chats</Title>
      <UsersList>
        {users.map((u) => (
          <ButtonChat key={u.id} onClick={() => openChat(u)}>
            <img src={u.image} alt={u.name} />
            <DivData>
              <Name>{u.name}</Name>
              <Text>{u.text}</Text>
            </DivData>
          </ButtonChat>
        ))}
      </UsersList>
    </Container>
  );
}
