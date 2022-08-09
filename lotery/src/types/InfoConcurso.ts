export interface InfosConcurso {
    acumulou: true;
    arrecadacao_total: number;
    concurso_especial: boolean;
    concurso_proximo: number;
    data_concurso: string;
    data_concurso_milliseconds: number;
    data_proximo_concurso: string;
    data_proximo_concurso_milliseconds: number;
    dezenas: [];
    local_ganhadores: [];
    local_realizacao: string;
    nome: string;
    nome_acumulado_especial: string;
    numero_concurso: number;
    numero_final_concurso_acumulado: number;
    premiacao: [];
    rateio_processamento: boolean;
    valor_acumulado: number;
    valor_acumulado_especial: number;
    valor_estimado_proximo_concurso: number;
    valor_final_concurso_acumulado: number | undefined;
}