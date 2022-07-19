import React, { useState } from 'react';

import { Controller } from 'react-hook-form';
import styled, { css } from 'styled-components';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import LabelStyled from '../../labels/LabelStyled';

const InputStyled = styled.input`
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

const InputStyledWithAutoCompleate = ({
  label,
  labelText,
  handler,
  control,
  addressArray = [],
  errors,
  placeholder,
}) => {
  const [searchTimeout, setSearchTimeout] = useState(false);

  const SearchChangeGandler = event => {
    if (setSearchTimeout !== false) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(
      setTimeout(
        () => {
          handler(event.target.value);
        },
        300,
        event.target.value
      )
    );
  };

  return (
    <>
      <Controller
        name={label}
        control={control}
        rules={{
          required: 'Address is required',
        }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <>
            <LabelStyled labelText={labelText} />
            <InputStyled
              name={name}
              formState={formState}
              errorBorder={errors}
              type={'text'}
              onChange={(event, item) => {
                SearchChangeGandler(event);
                onChange(event);
              }}
              //   onChange={event => {
              //    ;
              //     onChange(event);
              //   }}
              placeholder={placeholder}
              value={value}
              list='address-flavors'
              id='address-choice'
        
            
          
              //   name='adresse-choice'
              ref={ref}
            />
            <ErrorMessage text={errors?.message} />
          </>
        )}
      />

      <datalist id='address-flavors'>
        {addressArray?.map((item, index) => (
          <option value={item.title} key={index} />
        ))}
      </datalist>
    </>
  );
};

export default InputStyledWithAutoCompleate;
