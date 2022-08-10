import React, { useState } from "react";
import { useContexto } from "../context/context";
import { SearchOutlined } from "@ant-design/icons";
import {
  ButtonConcurso,
  ButtonSearch,
  DivConcurso,
  DivResultado,
} from "./styles";

export default function HeaderResultado(props: any) {
  const { resultado, setConcurso } = useContexto();
  const [inputConcurso, setInputConcurso] = useState<string>();

  const dataFormatada = resultado.data_concurso
    ?.split("T")
    .shift()
    .split("-")
    .reverse()
    .join("/");

  const concursoAnterior = resultado.numero_concurso - 1;

  return (
    <>
      <DivResultado>
        <div>
          <h1>RESULTADO</h1>
          <h3>Concurso: {resultado.numero_concurso}</h3>
          <h3>Data do Sorteio: {dataFormatada}</h3>
          {resultado.acumulou && <h1>Acumulou!</h1>}
          <DivConcurso>
            <ButtonConcurso
              onClick={() => {
                setConcurso(concursoAnterior);
              }}
            >
              Anterior
            </ButtonConcurso>
            <form style={{ display: "flex" }}>
              <input
                placeholder="Nº Concurso"
                type="search"
                onChange={(e) => {
                  setInputConcurso(e.target.value);
                }}
              ></input>
              <ButtonSearch
                type="submit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setConcurso(inputConcurso);
                }}
              >
                <SearchOutlined />
              </ButtonSearch>
            </form>
          </DivConcurso>
        </div>
        <img src={props.image} alt="Imagem da cartela do concurso" />
      </DivResultado>
    </>
  );
}
