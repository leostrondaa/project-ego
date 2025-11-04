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

export const Name = styled.h2`
  margin-top: 2px;
  color: black;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  `
export const Text = styled.h3`
  opacity: 0;
  color: #e0e0e0ff;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  `
export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  `
export const ButtonChat = styled.button`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  width: 90%;
  height: 50px;
  border: none;
  transition: all 0.1s ease-in-out;
  
  img {
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    }

  &:hover ${Name} {
    transition: all 0.2s ease-in-out;
    margin-top: 0;
    color: white;
  }
    &:hover ${Text} {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
    
  &:hover {
    width: 100%;
    height: 80px;
    background-color: #df61ffff;
    font-size: 10px;
    border-radius: 10px;

    img {
      transition: all 0.2s ease-in-out;
      margin-right: 10px;
      width: 50px;
      height: 50px;
      }
      &:active {
        background-color: #9300ceff;
      }
  }

`;export const UsersList = styled.div`
  background-color: rgba(2, 2, 2, 0);
  max-height: 900px;
  min-height: 600px; 
  overflow: auto;

 &::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

&::-webkit-scrollbar-track {
  background: rgba(2, 2, 2, 0); 
}

&::-webkit-scrollbar-thumb {
  background-color: #000000ff; 
  border-radius: 8px; 
  border: 3px solid #ffffff;
}

&::-webkit-scrollbar-thumb:hover {
  background-color: #424242ff; 
}

`;
