import styled from "styled-components";

export const DivResultado = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #D7DADA;
  h1 {
    font-size: 30px;
    color: #001529;
    font-weight: 900;
  }

  img{
    height: 250px;
  }

`
export const ButtonConcurso = styled.button`
    background-color: grey;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 12px;
  font-weight: 700;
  justify-content: center;
  line-height: 1rem;
  padding: .15rem 1rem;
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
:focus{
outline: 0;
}

:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}
`

export const DivConcurso = styled.div`
display: flex;
justify-content: center;
align-items: center;



input{
  max-width: 90px;
}
`
export const ButtonSearch = styled.button`
background-color: grey;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  line-height: .75rem;
  padding: .15rem 0.35rem;
  text-align: center;
  text-decoration: none #000000 solid;
  max-width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

`