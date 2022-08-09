import React, { useEffect, useState } from "react";
import getLoteria from "../../services/get-lotery";
import { InfosConcurso } from "../../types/InfoConcurso";
import { useContexto } from "../context/context";


export default function Search() { 
    const [resultado, setResultado] = useState<InfosConcurso>();
    const { concurso, setConcurso, nomeSorteio, setNomeSorteio } = useContexto();

    useEffect(() => {
        getLoteria(nomeSorteio, concurso).then((resultado) => {
            console.log(resultado.data);
            setResultado(resultado.data)
        })
    }, [nomeSorteio, concurso]);



    return (
        <>
            <div>
Resultado: {resultado && resultado.valor_final_concurso_acumulado}
            </div>
        </>
)
}