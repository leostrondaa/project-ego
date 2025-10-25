import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95); /* 50% de transparência */
  padding: ${({ theme }) => theme.spacing.lg};

  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  border-right: 1px solid black;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ButtonChat = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  width: 90%;
  height: 50px;
  font-size: 15px;

  border: none;
  transition: all 0.3s ease-in-out;

  img {
    transition: all 0.3s ease-in-out;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }

  &:hover {
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.primaryhover};
    font-size: 20px;

    img {
      transition: all 0.3s ease-in-out;
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryactivate};
  }
`;
