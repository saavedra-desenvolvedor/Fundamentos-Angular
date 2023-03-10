export interface Celular {
  id: number;
  nome: string;
  descricao?: string; //Interrogação signifa que o item será opcional.
  esgotado: boolean;
}
