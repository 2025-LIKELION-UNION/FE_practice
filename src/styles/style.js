import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(145deg, #fcefee, #e0f7fa);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: calc(100% - 120px);
  @media (hover: hover) and (pointer: fine) {
    width: 400px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  font-size: 6dvw;
  @media (hover: hover) and (pointer: fine) {
    font-size: 32px;
  }
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 16px;
  margin: 20px 0 0;
  background-color: #FFD8A9;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background-color: #FFB347;
  }
`;

export const Input = styled.input`
  width: calc(100% - 40px);
  padding: 12px 16px;
  margin: 8px 0;
  border: 2px solid #FFF0D5;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  background: #FFF6E5;
  transition: 0.2s;
  &:focus {
    border-color: #FFB347;
    background-color: #FFF0D5;
  }
`;
