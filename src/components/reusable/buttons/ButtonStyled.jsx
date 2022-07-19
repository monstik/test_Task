import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  /* height: 40px; */
  padding: 25px;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  background-color: #f50057;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  font-size: 18px;


  &:hover {
    transform: scale(1.03);
    transition: all .5s;
  }
`;

const ButtonStyled = ({ text, type }) => {
  return <Button type={type}>{text}</Button>;
};

export default ButtonStyled;
