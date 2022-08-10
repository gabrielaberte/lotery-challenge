import styled from "styled-components";

export const DivResultado = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #d7dada;
  h1 {
    font-size: 30px;
    color: #001529;
    font-weight: 900;
  }

  img {
    height: 250px;
  }

  @media (max-width: 800px) {
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
export const ButtonConcurso = styled.button`
  background-color: grey;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 12px;
  font-weight: 700;
  justify-content: center;
  line-height: 1rem;
  padding: 0.15rem 1rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  max-width: 80px;
  height: 30px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right: 10px;
  :focus {
    outline: 0;
  }

  :after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  @media (max-width: 800px) {
    max-width: 50px;
    height: 20px;
    font-size: 10px;
    padding: 0.01rem 0.5rem;
  }
`;

export const DivConcurso = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    max-width: 90px;
  }
  @media (max-width: 800px) {
   input{width: 100px;
   height: 30px} 
  }
`;
export const ButtonSearch = styled.button`
  background-color: grey;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  line-height: 0.75rem;
  padding: 0.15rem 0.35rem;
  text-align: center;
  text-decoration: none #000000 solid;
  max-width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
