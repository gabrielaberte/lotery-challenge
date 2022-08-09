import React, { useEffect, useState } from "react";
import getLoteria from "../../services/get-lotery";

export default function Search() { 
    const [nomeLoteria, setNomeLoteria] = useState<string>('megasena');
    const [concurso, setConcurso] = useState<number | undefined>();

    useEffect(() => {
        getLoteria(nomeLoteria, concurso).then((resultado) => {
            console.log(resultado.data)
        })
    });


    return (
        <>
        </>
)
}