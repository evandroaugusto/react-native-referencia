export enum AgendamentoTipo {
  Prioridade = 'Prioridade',
  Padrao = 'Padrão'
}

export type Agendamento = {
  tipo: AgendamentoTipo;
  sala: number;
  data: number;
  totalCandidatos: number;
}