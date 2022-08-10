import React from "react";
import { useContexto } from "../context/context";
import megaSena from "../../assets/Mega-Sena-Cabecalho.png";
import { DivPremiacao, DivResultado } from "./styles";
import HeaderResultado from "../HeaderResultado";
import { DivContainer } from "../Search/styles";

export default function MegaSena() {
  const { resultado } = useContexto();

  const estimativaProximoConcurso =
    resultado.valor_estimado_proximo_concurso.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  const dataFormatada = resultado.data_proximo_concurso
    ?.split("T")
    .shift()
    .split("-")
    .reverse()
    .join("/");

  const premiacao = resultado.premiacao;


  return (
    <>
      <HeaderResultado
        image={
          "https://loterias.caixa.gov.br/PublishingImages/Mega-Sena/Mega-Sena-Cabecalho.png"
        }
      />

      <DivResultado>
        {resultado.dezenas.map((e: string) => (
          <p>{e}</p>
        ))}
      </DivResultado>
      <div>
        <p>Estimativa de prêmio do próximo concurso dia {dataFormatada}</p>
        <h2>{estimativaProximoConcurso}</h2>
      </div>
      <DivPremiacao>
        <div>
          <h3>Premiação</h3>
          <p>6 acertos </p>
          <span>
            {premiacao[0].quantidade_ganhadores != 0
              ? `${premiacao[0].quantidade_ganhadores} ganhadores`
              : "Não houveram ganhadores"}
          </span>
          <p>5 acertos </p>
          <span>
            {premiacao[1].quantidade_ganhadores != 0
              ? `${
                  premiacao[1].quantidade_ganhadores
                } ganhadores, recebem ${premiacao[1].valor_total.toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}`
              : "Não houveram ganhadores"}
          </span>
          <p>4 acertos</p>
          <span>
            {premiacao[2].quantidade_ganhadores != 0
              ? `${
                  premiacao[2].quantidade_ganhadores
                } ganhadores, recebem ${premiacao[2].valor_total.toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}`
              : "Não houveram ganhadores"}
          </span>
        </div>
        <div>
          <p> Acumulado próximo concurso </p>
          <span>
            {resultado.valor_acumulado.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <p>Acumulado próximo concurso final zero/cinco</p>
          <span>
            {resultado.valor_final_concurso_acumulado.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <p>Acumulado para Sorteio Especial Mega da Virada </p>
          <span>
            {resultado.valor_acumulado_especial.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <p>Arrecadação total</p>
          <span>
            {resultado.arrecadacao_total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </DivPremiacao>
    </>
  );
}
