import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Container } from './style';
import FormLogin from '../../components/formlogin';
import { Client } from '../../api/client';
import { OrbitProgress } from 'react-loading-indicators';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export default function Home() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      {load ? (
        <Container>
          <OrbitProgress
            variant="spokes"
            color="#ffffffff"
            size="small"
            text=""
          />
        </Container>
      ) : (
        <Container>
          <FormLogin></FormLogin>
        </Container>
      )}
    </ThemeProvider>
  );
}
