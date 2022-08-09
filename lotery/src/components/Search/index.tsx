import React, { useEffect, useState } from "react";
import getLoteria from "../../services/get-lotery";
import { InfosConcurso } from "../../types/InfoConcurso";


export default function Search() { 
    const [nomeLoteria, setNomeLoteria] = useState<string>('megasena');
    const [concurso, setConcurso] = useState<number | undefined>();
    const [resultado, setResultado] = useState<InfosConcurso>();

    useEffect(() => {
        getLoteria(nomeLoteria, concurso).then((resultado) => {
            console.log(resultado.data);
            setResultado(resultado.data)
        })
    }, [nomeLoteria, concurso]);



    return (
        <>
            <div>
Resultado: {resultado && resultado.valor_final_concurso_acumulado}
            </div>
        </>
)
}