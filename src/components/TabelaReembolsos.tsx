import React, { useState } from 'react';
import './TabelaReembolsos.css';

interface Reembolso {
  id: number;
  funcionario: string;
  destino: string;
  transporte: number;
  geral: number;
  status: 'Aguardando' | 'Aprovado' | 'Rejeitado';
}

const TabelaReembolsos: React.FC = () => {
  const [reembolsos, setReembolsos] = useState<Reembolso[]>([
    {
      id: 1,
      funcionario: 'João Silva',
      destino: 'São Paulo',
      transporte: 200,
      geral: 150,
      status: 'Aguardando',
    },
    {
      id: 2,
      funcionario: 'Maria Oliveira',
      destino: 'Curitiba',
      transporte: 300,
      geral: 120,
      status: 'Aprovado',
    },
    {
      id: 3,
      funcionario: 'Carlos Souza',
      destino: 'Belo Horizonte',
      transporte: 180,
      geral: 100,
      status: 'Rejeitado',
    },
  ]);

  const aprovarReembolso = (id: number) => {
    setReembolsos(prev =>
      prev.map(r => (r.id === id ? { ...r, status: 'Aprovado' } : r))
    );

    // Integração futura com backend:
    // fetch(`/api/reembolsos/${id}/aprovar`, { method: 'POST' });
  };

  const rejeitarReembolso = (id: number) => {
    setReembolsos(prev =>
      prev.map(r => (r.id === id ? { ...r, status: 'Rejeitado' } : r))
    );

    // Integração futura com backend:
    // fetch(`/api/reembolsos/${id}/rejeitar`, { method: 'POST' });
  };

  return (
    <div className="tabela-container">
      <h2>Reembolsos</h2>
      <table>
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>Cidade/Destino</th>
            <th>Transporte (R$)</th>
            <th>Geral (R$)</th>
            <th>Total</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reembolsos.map((r) => (
            <tr key={r.id}>
              <td>{r.funcionario}</td>
              <td>{r.destino}</td>
              <td>{r.transporte.toFixed(2)}</td>
              <td>{r.geral.toFixed(2)}</td>
              <td>{(r.transporte + r.geral).toFixed(2)}</td>
              <td className={`status ${r.status.toLowerCase()}`}>{r.status}</td>
              <td>
                {r.status === 'Aguardando' && (
                  <>
                    <button onClick={() => aprovarReembolso(r.id)} className="btn-aprovar">Aprovar</button>
                    <button onClick={() => rejeitarReembolso(r.id)} className="btn-rejeitar">Rejeitar</button>
                  </>
                )}
                {r.status !== 'Aguardando' && <span>—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaReembolsos;
