import React from "react";
import { useContexto } from "../context/context";
import megaSena from "../../assets/Mega-Sena-Cabecalho.png";
import { DivResultado } from "./styles";

export default function HeaderResultado(props: any) {
  const { resultado } = useContexto();

  const dataFormatada = resultado.data_concurso
    ?.split("T")
    .shift()
    .split("-")
    .reverse()
    .join("/");

  return (
    <>
      <DivResultado>
        <div>
          <h1>RESULTADO</h1>
          <h3>Concurso: {resultado.numero_concurso}</h3>
          <h3>Data do Sorteio: {dataFormatada}</h3>
          {resultado.acumulou && <h1>Acumulou!</h1>}
        </div>
        <img src={props.image} alt="" />
      </DivResultado>
    </>
  );
}
