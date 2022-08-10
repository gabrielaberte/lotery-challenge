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
    background-color: green;
    border-radius: 100%;
    color: white;
  }

`;

export const DivPremiacao = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 20px;
align-items: center;
align-self: center;

div{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #D7DADA;
  border-radius: 10px;
}

p{
  margin-bottom: 2px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
}

span{
margin-bottom: 5px;
}
`