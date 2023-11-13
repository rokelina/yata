import styled from 'styled-components';

const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  background-color: white;
  color: black;
  box-shadow: 1px 1px 1px #a6a6a6;
  border: solid #333 1px;
  border-radius: 20px;
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

export default Button;
