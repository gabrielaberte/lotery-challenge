import React from "react";
import { useContexto } from "../context/context";
import { DivGanhadores, DivPremiacao, DivResultado } from "./styles";
import HeaderResultado from "../HeaderResultado";

export default function Lotofacil() {
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
  const ganhadores = resultado?.local_ganhadores;

  return (
    <>
      <HeaderResultado
        image={
          "https://loterias.caixa.gov.br/PublishingImages/Lotofacil/Lotofacil-Cabecalho.png"
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
          <p>15 acertos </p>
          <span>
            {premiacao[0].quantidade_ganhadores != 0
              ? `${premiacao[0].quantidade_ganhadores} ganhadores`
              : "Não houveram ganhadores"}
          </span>
          <p>14 acertos </p>
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
          <p>13 acertos</p>
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
          <p>12 acertos</p>
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
          <p>11 acertos</p>
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
          </span>
        </div>
        <div>
          <p> Acumulado próximo concurso final zero</p>
          <span>
            {resultado.valor_acumulado.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <p> Acumulado próximo sorteio especial</p>
          <span>
            {resultado.valor_acumulado_especial.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <p> Arrecadação Total</p>
          <span>
            {resultado.arrecadacao_total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          {ganhadores.length > 0 && <p>Cidade dos Ganhadores:</p>}
          {ganhadores.length > 0 && (
            <DivGanhadores>
              {ganhadores.map((e: any) => (
                <span>
                   {e.cidade}
                </span>
              ))}{" "}
            </DivGanhadores>
          )}
        </div>
      </DivPremiacao>
    </>
  );
}
