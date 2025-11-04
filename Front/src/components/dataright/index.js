import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OrbitProgress } from 'react-loading-indicators';
import UserContext from '../../contexts/UserContext';
import { Client, setToken, testConnection } from '../../api/client';
import { setPermissions } from '../../service/PermissionService';
import { setDataUser } from '../../service/UserService';
import { Container, ButtonChat, Title, Name, Text, DivData, UsersList, NavBar } from './style';
import Walter from '../../images/walter.jpg';
import { Input } from './style';
import { Footer } from './style';
import { Submit } from './style';

export default function DataLeft() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  useEffect(() => { }, []);

  return (
    <Container>
      <NavBar>
        <img src={Walter}></img>
        <Name>Walter White</Name>
      </NavBar>
      <Footer>


      <Input></Input><Submit></Submit>
      </Footer>
    </Container>
  );
}
