import axios from "axios";
import { resolve } from "node:path/win32";
import api from "./api";

const myToken = "BhsWVNJjadFf7qz";

async function getLoteria(nomeLoteria: string, concurso: number | undefined) {
  if (concurso) {
    const response = await api.get(
      `resultado?loteria=${nomeLoteria}&token=${myToken}&concurso=${concurso}`
    );
    return response;
  } else {
    const response = await api.get(
      `resultado?loteria=${nomeLoteria}&token=${myToken}`
    );

    return response;
  }
}

export default getLoteria;
