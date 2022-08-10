import React from "react";
import { useContexto } from "../context/context";
import { DivPremiacao, DivResultado } from "./styles";
import HeaderResultado from "../HeaderResultado";

export default function Lotomania() {
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
          "https://loterias.caixa.gov.br/PublishingImages/Lotomania/Lotomania-Cabecalho.png"
        }
      />

      <DivResultado>
        {resultado.dezenas.map((e: string) => (
          <p key={e}>{e}</p>
        ))}
      </DivResultado>
      <div>
        <p>Estimativa de prêmio do próximo concurso dia {dataFormatada}</p>
        <h2>{estimativaProximoConcurso}</h2>
      </div>
      <DivPremiacao>
        <div>
          <h3>Premiação</h3>
          <p>20 acertos </p>
          <span>
            {premiacao[0].quantidade_ganhadores != 0
              ? `${premiacao[0].quantidade_ganhadores} ganhadores`
              : "Não houveram ganhadores"}
          </span>
          <p>19 acertos </p>
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
          <p>18 acertos</p>
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
          <p>17 acertos</p>
          <span>
            {premiacao[3].quantidade_ganhadores != 0
              ? `${
                  premiacao[3].quantidade_ganhadores
                } ganhadores, recebem ${premiacao[3].valor_total.toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}`
              : "Não houveram ganhadores"}
          </span>
          <p>16 acertos</p>
          <span>
            {premiacao[4].quantidade_ganhadores != 0
              ? `${
                  premiacao[4].quantidade_ganhadores
                } ganhadores, recebem ${premiacao[4].valor_total.toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}`
              : "Não houveram ganhadores"}
          </span><p>15 acertos</p>
          <span>
            {premiacao[5].quantidade_ganhadores != 0
              ? `${
                  premiacao[5].quantidade_ganhadores
                } ganhadores, recebem ${premiacao[5].valor_total.toLocaleString(
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
        </div>
      </DivPremiacao>
    </>
  );
}
