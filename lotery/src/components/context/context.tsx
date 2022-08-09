import React, { useContext, useState } from "react";
import { InfosConcurso } from "../../types/InfoConcurso";

export const Context = React.createContext<any>({});

export function ContextProvider(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}): any {
  const [nomeSorteio, setNomeSorteio] = useState<string>("megasena");
  const [concurso, setConcurso] = useState<number | undefined>();
  const [resultado, setResultado] = useState<InfosConcurso>();

  return (
    <Context.Provider
      value={{
        nomeSorteio,
        setNomeSorteio,
        concurso,
        setConcurso,
        resultado,
        setResultado,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useContexto(): any {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Sem contexto");
  }

  return context;
}
