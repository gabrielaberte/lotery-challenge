import React from "react";
import { useContexto } from "../../components/context/context";
import Lotomania from "../../components/Lotomania";
import MegaSena from "../../components/MegaSena";
import NavBar from "../../components/NavBar";
import Quina from "../../components/Quina";
import Search from "../../components/Search";

export default function HomePage() {
  function SwitchResultado() {
    const { resultado } = useContexto();
    if (resultado?.nome == "MEGA-SENA") {
      return <MegaSena />;
    } else if (resultado?.nome == "QUINA") {
      return <Quina/>;
    } else if (resultado?.nome == "LOTOFÁCIL") {
      return <>osdasdasdsadas</>;
    } else if (resultado?.nome == "LOTOMANIA") {
      return <Lotomania/>;
    } else if (resultado?.nome == "TIMEMANIA") {
      return <>osdasdas555555555dsadas</>;
    } else if (resultado?.nome == "DUPLASENA") {
      return <>osdasdasd6666666sadas</>;
    } else if (resultado?.nome == "QUINA") {
      return <>osdasdasds777777adas</>;
    } else if (resultado?.nome == "DIA DE SORTE") {
      return <>osdasdasd888888888sadas</>;
    } else if (resultado?.nome == "FEDERAL") {
      return <>osdasdasd99999999sadas</>;
    } else if (resultado?.nome == "LOTECA") {
      return <>osdasdasdsadas</>;
    } else if (resultado?.nome == "SUPER SETE") {
      return <>osdasdasdsadas</>;
    } else if (resultado?.nome == "+MILIONÁRIA") {
      return <>osdasdasds00000000adas</>;
    }

    return <></>;
  }

  return (
    <>
      <NavBar />
      <SwitchResultado />
      <Search />
    </>
  );
}
