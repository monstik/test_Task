import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  background-color: ${({bgc}) => bgc ? bgc : '#fff'};
  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 calc(30px + (80 - 30) * ((100vw - 320px) / (1763 - 320)));
  }
`;

const Container = ({ children, p, bgc }) => {
  return <ContainerStyled bgc={bgc} p={p}>{children}</ContainerStyled>;
};

export default Container;
