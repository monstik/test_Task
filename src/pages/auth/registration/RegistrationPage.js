import React from 'react';
import styled from 'styled-components';
import RegistrationForm from '../../../components/forms/RegistrationForm/RegistrationForm';
import MainLayout from '../../../components/layout/MainLayout';
import Container from '../../../components/reusable/container/Container';
import UserTable from '../../../components/userTable/UserTable';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TebleWrapper = styled.div``;

const FormWrapper = styled.div`

`;

const RegistrationPage = () => {
  return (
    <MainLayout>
      <Container bgc={'#ffef62'}>
        <Wrapper>
          <FormWrapper>
            <RegistrationForm />
          </FormWrapper>
          <TebleWrapper>
            <UserTable />
          </TebleWrapper>
        </Wrapper>
      </Container>
    </MainLayout>
  );
};

export default RegistrationPage;
