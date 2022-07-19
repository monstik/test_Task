import React from 'react'
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
 
`;

const MainLayout = ({children}) => {
  return (
    <Page>
        {children}
    </Page>
  )
}

export default MainLayout