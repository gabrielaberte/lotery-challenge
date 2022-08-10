import React from "react";
import { useContexto } from "../context/context";
import { DivPremiacao, DivResultado } from "./styles";
import HeaderResultado from "../HeaderResultado";

export default function DiaDeSorte() {
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
          "https://loterias.caixa.gov.br/PublishingImages/Dia%20de%20Sorte/Dia-de-Sorte-Cabecalho.png"
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
          <p>7 acertos </p>
          <span>
            {premiacao[0].quantidade_ganhadores != 0
              ? `${premiacao[0].quantidade_ganhadores} ganhadores`
              : "Não houveram ganhadores"}
          </span>
          <p>6 acertos </p>
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
          <p>5 acertos</p>
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
          <p>4 acertos</p>
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
          
        </div>
        <div>
          <p> Acumulado próximo concurso</p>
          <span>
            {resultado.valor_acumulado.toLocaleString("pt-br", {
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
          {ganhadores.length > 0 && (
            <>
              <p>Cidade dos Ganhadores:</p>
              {ganhadores.map((e: any) => (
                <>
                  <span>{e.cidade}</span>
                </>
              ))}{" "}
            </>
          )}
        </div>
      </DivPremiacao>
    </>
  );
}
