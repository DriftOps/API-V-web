// Representa um funcionário que solicitou reembolso
export interface Funcionario {
  id: string;
  nome: string;
  destino: string;
}

// Reembolso detalhado por categoria
export interface Reembolso {
  id: string;
  funcionario: Funcionario;
  transporte: number;
  geral: number;
  total: number;
  status: 'Aguardando' | 'Aprovado' | 'Rejeitado';
  dataSolicitacao: string; // ISO string (ex: "2025-05-23T12:00:00Z")
}

// Solicitação recente usada no painel lateral
export interface SolicitacaoRecente {
  id: string;
  funcionario: string;
  destino: string;
  data: string; // Pode ser formatada no front para dd/mm/aaaa
}
