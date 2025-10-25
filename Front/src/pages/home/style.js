import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${({ theme }) => theme.spacing.md};

  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  max-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr; // 1 coluna no tablet/celular
  }
`;
