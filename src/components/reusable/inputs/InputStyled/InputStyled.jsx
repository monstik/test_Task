import React from 'react';
import styled, { css } from 'styled-components';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import LabelStyled from '../../labels/LabelStyled';

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: none;

  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;

  ${props =>
    props.errorBorder &&
    css`
      -webkit-box-shadow: 0px 0px 2px 2px rgba(255, 0, 0, 1);
      -moz-box-shadow: 0px 0px 2px 2px rgba(255, 0, 0, 1);
      box-shadow: 0px 0px 2px 2px rgba(255, 0, 0, 1);
    `}

  &:focus {
    outline: none;
  }
`;





const InputStyled = ({ label, labelText, placeholder, register, validation, errors, type = 'text' }) => {
  return (
    <>
      <LabelStyled labelText={labelText} />
      <Input
        placeholder={placeholder}
        errorBorder={errors}
        type={type}
        {...register(label, validation)}
      />
      <ErrorMessage text={errors?.message} />
    </>
  );
};

export default InputStyled;
