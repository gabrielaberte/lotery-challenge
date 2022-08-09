import React, { useEffect, useState } from "react";
import getLoteria from "../../services/get-lotery";
import { InfosConcurso } from "../../types/InfoConcurso";
import { useContexto } from "../context/context";

export default function Search() {
  const { concurso, setConcurso, nomeSorteio, setNomeSorteio, resultado, setResultado } = useContexto();

  useEffect(() => {
    getLoteria(nomeSorteio, concurso).then((resultado) => {
      console.log(resultado.data);
      setResultado(resultado.data);
    });
  }, [nomeSorteio, concurso]);

  return (
    <>
          <div>Resultado</div>
          <div>Último Concurso: { resultado?.numero_concurso }</div>
    </>
  );
}
