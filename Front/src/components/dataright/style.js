import styled from 'styled-components';

export const Container = styled.div`
 background-color: rgba(255, 255, 255, 0.95); /* 50% de transparência */
 padding: 40px;
 
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 `;
 
 export const Name = styled.h1`
 color: white;
 font-size: 30px;
 `;
 export const Input = styled.input`
 width: 90%;
 height: 50px;
 border-radius: 20px;
 border: 1px solid black;
 padding: 10px;
 
 `;
 export const Footer = styled.div`
 height: 5%;
 width: 100%;
 align-items: center;
 display: flex;
 gap: 30px;
 `;
 export const Submit = styled.button`
 width: 50px;
 height: 50px;
 border-radius: 50%;
 border: 1px solid black;
 background-color:  #df61ffff;
 transition: all 0.2s ease-in-out;
 
 &:hover{
  transition: all 0.2s ease-in-out;
  background-color:  #9300ceff;
  
  }
  `;
  export const ChatDiv = styled.div`
    background: linear-gradient(to right, transparent, orange, transparent);
    width: 20%
  `
  
  export const NavBar = styled.div`
  background-color: rgba(2, 2, 2, 1);
  padding: 20px;
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 20px;
  
  img {
    height: 50px;
    border-radius: 50%;
    width: 50px; 
    border: 2px solid white;
    }

`;
