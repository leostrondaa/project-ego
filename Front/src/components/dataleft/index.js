import React from "react";
import { useNavigate } from "react-router-dom";
import Pix from "../../images/walter.jpg";
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
    image: Pix,
    messages: [
      { id: 1, text: "Say my name", time: "10:00" },
      { id: 2, text: "You're goddamn right", time: "10:05" },
    ],
  },
    { id: 2, name: "Jessie Pinkman", text: "rosinha", image: Pix },
    { id: 3, name: "Jane Margolis", text: "tô confusa", image: Pix },
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
