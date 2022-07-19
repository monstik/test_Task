import React from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage';
import LabelStyled from '../labels/LabelStyled';

const ChecboxWLabel = ({ register, label, labelText, validation, id, errors, htmlFor }) => {
  return (
    <>
      <input
        id={id}
        type='checkbox'
        {...register(label, validation)}
      />
      <LabelStyled
        padding={'10px'}
        display={'inline'}
        htmlFor={htmlFor}
        labelText={labelText}
      />
      <ErrorMessage text={errors?.message}/>
    </>
  );
};

export default ChecboxWLabel