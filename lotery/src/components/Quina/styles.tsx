import styled from "styled-components";

export const DivResultado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    margin: 10px;
    height: 50px;
    width: 50px;
    padding: 10px;
    background-color: #463980;
    border-radius: 100%;
    color: white;
  }

  @media (max-width: 800px) {
      p{font-size: 15px;
    margin: 10px;
    height: 30px;
    width: 30px;
    padding: 3px;
    background-color: #463980;
    border-radius: 100%;
    color: white;}
    img {
      height: 150px;
    }
    h1 {
      font-size: 15px;
      color: #001529;
      font-weight: 900;
    }
    h3 {
      font-size: 10px;
    }
  }

  @media (max-width: 400px) {
    img {
      height: 90px;
    }
  }
`;

export const DivPremiacao = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  align-items: center;
  align-self: center;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 300px;
    background-color: #d7dada;
    border-radius: 10px;
  }

  p {
    margin-bottom: 2px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;
  }

  span {
    margin-bottom: 5px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 50px;
      height: fit-content;
    }
  }
`;
