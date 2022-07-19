import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LabelStyled from '../reusable/labels/LabelStyled';

const Wrapper = styled.div`
  height: 706px;
  width: 600px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 2px solid white;

  background-color: #fff;

  border-radius: 20px;

  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const User = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;

  border-bottom: 1px solid black;
`;

const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  text-align: end;
`;

const UserTable = () => {
  const usersData = useSelector(state => state.users.users);

  return (
    <Wrapper>
      {usersData?.map((item, index) => (
        <User key={index}>
          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0'}
              labelText={'firstName'}
            />
            <StyledSpan style={{ textAlign: 'right' }}>
              {item.firstName}
            </StyledSpan>
          </UserItem>

          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0px 30px 0px 0px'}
              labelText={'lastName'}
            />
            <StyledSpan>{item.lastName}</StyledSpan>
          </UserItem>

          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0px 30px 0px 0px'}
              labelText={'phoneNumber'}
            />
            <StyledSpan>{item.phoneNumber}</StyledSpan>
          </UserItem>

          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0px 30px 0px 0px'}
              labelText={'email'}
            />
            <StyledSpan>{item.email}</StyledSpan>
          </UserItem>

          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0px 30px 0px 0px'}
              labelText={'gender'}
            />
            <StyledSpan>{item.gender}</StyledSpan>
          </UserItem>

          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0px 30px 0px 0px'}
              labelText={'address'}
            />
            <StyledSpan>{item.address}</StyledSpan>
          </UserItem>

          <UserItem>
            <LabelStyled
              color={'black'}
              display={'inline'}
              margin={'0px 30px 0px 0px'}
              labelText={'confirm'}
            />
            <StyledSpan>{item.confirm.toString()}</StyledSpan>
          </UserItem>
        </User>
      ))}
    </Wrapper>
  );
};

export default UserTable;

