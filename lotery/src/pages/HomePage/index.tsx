import React from "react";
import { useContexto } from "../../components/context/context";
import DiaDeSorte from "../../components/DiaDeSorte";
import Lotofacil from "../../components/Lotofacil";
import Lotomania from "../../components/Lotomania";
import MegaSena from "../../components/MegaSena";
import NavBar from "../../components/NavBar";
import Quina from "../../components/Quina";
import Search from "../../components/Search";
import Timemania from "../../components/Timemania";

export default function HomePage() {
  function SwitchResultado() {
    const { resultado } = useContexto();
    if (resultado?.nome == "MEGA-SENA") {
      return <MegaSena />;
    } else if (resultado?.nome == "QUINA") {
      return <Quina/>;
    } else if (resultado?.nome == "LOTOFÁCIL") {
      return <Lotofacil/>;
    } else if (resultado?.nome == "LOTOMANIA") {
      return <Lotomania/>;
    } else if (resultado?.nome == "TIMEMANIA") {
      return <Timemania />;
    } else if (resultado?.nome == "DIA DE SORTE") {
      return <DiaDeSorte />;
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
