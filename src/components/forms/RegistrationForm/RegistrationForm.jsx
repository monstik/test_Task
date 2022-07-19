import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchAddresses } from '../../../asyncActions/adresses';
import { addUserAction } from '../../../redux/reducers/usersReducer';

import ButtonStyled from '../../reusable/buttons/ButtonStyled';
import ChecboxWLabel from '../../reusable/checkbox/ChecboxWLabel';
import InputStyled from '../../reusable/inputs/InputStyled/InputStyled';
import InputStyledWithAutoCompleate from '../../reusable/inputs/InputStyled/InputStyledWithAutoCompleate';
import LabelStyled from '../../reusable/labels/LabelStyled';

const FormWrapper = styled.form`
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  border-radius: 20px;
  width: 500px;
  padding: 20px;
  margin: 0 auto;
  background-color: #7a00ff;

  input {
    &:hover {
      transform: scale(1.03);
      transition: all 0.5s;
    }
  }
`;

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    dispatch(addUserAction(data));

    reset({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: '',
      confirm: false,
    });
  };

  const autocompleateOptions = useSelector(
    state => state.autocompleate.addresses
  );
  const dispatch = useDispatch();

  const autoCompleatHandler = value => {
    dispatch(fetchAddresses(value));
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputStyled
        label={'firstName'}
        labelText={'First Name*'}
        register={register}
        placeholder={'First name...'}
        validation={{
          required: 'First Name is required',
          minLength: { value: 3, message: 'Min Length is 3' },
          maxLength: { value: 10, message: 'Max Length is 10' },
        }}
        errors={errors.firstName}
      />
      <InputStyled
        label={'lastName'}
        labelText={'Last Name*'}
        register={register}
        placeholder={'Last name...'}
        validation={{
          required: 'First Name is required',
          minLength: { value: 3, message: 'Min Length is 3' },
          maxLength: { value: 10, message: 'Max Length is 10' },
        }}
        errors={errors.lastName}
      />
      <InputStyled
        label={'phoneNumber'}
        labelText={'Phone number*'}
        type={'tel'}
        register={register}
        placeholder={'Phone number...'}
        validation={{
          required: { value: true, message: 'Phone number is Required' },
          minLength: { value: 6, message: 'Min Length is 6' },
          maxLength: { value: 12, message: 'Max Length is 12' },
          pattern: { value: /^\d+$/, message: 'Use only numbers' },
        }}
        errors={errors.phoneNumber}
      />
      <InputStyled
        label={'email'}
        labelText={'Email*'}
        type={'email'}
        register={register}
        placeholder={'Email...'}
        validation={{
          required: 'First Name is required',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'write correct email',
          },
        }}
        errors={errors.email}
      />

      <LabelStyled labelText={'Gender*'} />

      <select {...register('gender')}>
        <option value='female'>female</option>
        <option value='male'>male</option>
      </select>

      <InputStyledWithAutoCompleate
        handler={autoCompleatHandler}
        control={control}
        addressArray={autocompleateOptions}
        label={'address'}
        labelText={'Address*'}
        placeholder={'Address...'}
        errors={errors.address}
      />

      <ChecboxWLabel
        register={register}
        label={'confirm'}
        id={'confirmId'}
        htmlFor={'confirmId'}
        labelText={'Data Usage Confirmation*'}
        validation={{
          required: 'You need to confirm the use of data',
        }}
        errors={errors.confirm}
      />

      <ButtonStyled type='submit' text={'Registration'} />
    </FormWrapper>
  );
};

export default RegistrationForm;
