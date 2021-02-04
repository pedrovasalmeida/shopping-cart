import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  min-height: calc(100vh - 50px);

  padding: 0 50px;

  background-color: #eeeeee;
`;

export const ProductsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 80vw;

  @media only screen and (max-width: 540px) {
    width: 100vw;
  }
`;
