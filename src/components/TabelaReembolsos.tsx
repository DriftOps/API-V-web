import React, { useState } from 'react';
import './TabelaReembolsos.css';

interface Reembolso {
  id: number;
  funcionario: string;
  transporte: number;
  geral: number;
  status: 'Aguardando' | 'Aprovado' | 'Rejeitado';
}

const TabelaReembolsos: React.FC = () => {
  const [reembolsos, setReembolsos] = useState<Reembolso[]>([
    {
      id: 1,
      funcionario: 'Luiz Henrique Souza Silva',
      transporte: 66.60,
      geral: 85.55,
      status: 'Aprovado',
    },
    {
      id: 2,
      funcionario: 'Luiz Henrique Souza Silva',
      transporte: 55.80,
      geral: 25.55,
      status: 'Rejeitado',
    },
    {
      id: 3,
      funcionario: 'Luiz Henrique Souza Silva',
      transporte: 180,
      geral: 66.6,
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
            <th>Transporte (R$)</th>
            <th>Geral (R$)</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reembolsos.map((r) => (
            <tr key={r.id}>
              <td>{r.funcionario}</td>
              <td>{r.transporte.toFixed(2)}</td>
              <td>{r.geral.toFixed(2)}</td>
              <td>{(r.transporte + r.geral).toFixed(2)}</td>
              <td className={`status ${r.status.toLowerCase()}`}>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaReembolsos;
