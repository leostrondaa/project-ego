import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from 'react-loading-indicators';
import UserContext from '../../contexts/UserContext';
import { Client, setToken, testConnection } from '../../api/client';
import { setPermissions } from '../../service/PermissionService';
import { setDataUser } from '../../service/UserService';
import { Container, ButtonChat, Title } from './style';
import Pix from '../../images/pix.png';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  useEffect(() => {}, []);

  return (
    <Container>
      <Title>Chats</Title>
      <ButtonChat>
        <img src={Pix}></img>
        Pedro
      </ButtonChat>
      <ButtonChat>
        <img src={Pix}></img>Pedro
      </ButtonChat>
      <ButtonChat>
        <img src={Pix}></img>
        Pedro
      </ButtonChat>
    </Container>
  );
}
