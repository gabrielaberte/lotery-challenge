import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 200px;
  padding: 20px;
  margin: 0px;
  :hover {
    background-color: #D7DADA;
  }

  img {
    height: 30px;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    align-self: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    color: inherit;
    margin: 0;
  }

`;
