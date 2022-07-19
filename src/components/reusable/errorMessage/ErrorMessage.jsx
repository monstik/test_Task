import React from 'react'
import styled from 'styled-components';

const ErrMessage = styled.p`
  color: red;
  font-size: 15px;
  font-weight: lighter;
  height: 20px;
`;


const ErrorMessage = ({text}) => {
  return (
    <ErrMessage>{text}</ErrMessage>
  )
}

export default ErrorMessage