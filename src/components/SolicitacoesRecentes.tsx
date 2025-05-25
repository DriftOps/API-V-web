import React from 'react';
import './SolicitacoesRecentes.css';

interface Solicitacao {
  id: number;
  funcionario: string;
  destino: string;
  data: string;
}

const SolicitacoesRecentes: React.FC = () => {
  const solicitacoes: Solicitacao[] = [
    { id: 1, funcionario: 'João Silva', destino: 'São Paulo', data: '2025-05-20' },
    { id: 2, funcionario: 'Maria Oliveira', destino: 'Curitiba', data: '2025-05-21' },
    { id: 3, funcionario: 'Carlos Souza', destino: 'Belo Horizonte', data: '2025-05-22' },
  ];

  return (
    <div className="recentes-container">
      <h3>Solicitações Recentes</h3>
      <ul>
        {solicitacoes.map((s) => (
          <li key={s.id}>
            <strong>{s.funcionario}</strong><br />
            {s.destino} - <span>{s.data}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolicitacoesRecentes;
