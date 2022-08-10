import styled from "styled-components";

export const DivResultado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 250px;
  margin-right: 250px;

  p {
    font-size: 20px;
    margin: 10px;
    height: 50px;
    width: 50px;
    padding: 10px;
    background-color: orange;
    border-radius: 100%;
    color: white;
  }

  @media (max-width: 800px) {
display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
    p{font-size: 15px;
    margin: 10px;
    height: 30px;
    width: 30px;
    padding: 3px;
    background-color: orange;
    border-radius: 100%;
    color: white;}

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
  height: 500px;
  width: 300px;
  background-color: #D7DADA;
  border-radius: 10px;
}

p{
  margin-bottom: 2px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
}

span{
margin-bottom: 5px;
}

@media (max-width: 800px) {
display: flex;
flex-direction: column;


div{
  margin-bottom: 50px;
  height: fit-content;
}

}

`