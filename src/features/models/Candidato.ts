export enum CandidatoStatus {
  Presente,
  Aprovado
}

export type Candidato = {
  inscricao: string;
  status: CandidatoStatus;
  sala: number;
}