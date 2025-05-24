import React, { useState } from 'react';
import './App.css';

interface Reembolso {
  id: string;
  nome: string;
  destino: string;
  transporte: number;
  geral: number;
  status: 'Aguardando' | 'Aprovado' | 'Rejeitado';
}

function App() {
  const [reembolsos, setReembolsos] = useState<Reembolso[]>([
    {
      id: '1',
      nome: 'João Silva',
      destino: 'São Paulo',
      transporte: 120,
      geral: 300,
      status: 'Aguardando'
    },
    {
      id: '2',
      nome: 'Maria Oliveira',
      destino: 'Rio de Janeiro',
      transporte: 150,
      geral: 400,
      status: 'Aprovado'
    },
    {
      id: '3',
      nome: 'Carlos Souza',
      destino: 'Belo Horizonte',
      transporte: 100,
      geral: 250,
      status: 'Rejeitado'
    }
  ]);

  const alterarStatus = (id: string, novoStatus: 'Aprovado' | 'Rejeitado') => {
    setReembolsos(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: novoStatus } : item
      )
    );

    // Integração futura com backend MongoDB (exemplo com axios):
    // axios.put(`http://localhost:3000/reembolsos/${id}`, { status: novoStatus })
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error('Erro ao atualizar status:', error));
  };

  const totalPendentes = reembolsos.filter(r => r.status === 'Aguardando').length;
  const totalAprovado = reembolsos.filter(r => r.status === 'Aprovado').length;
  const valorTotal = reembolsos
    .filter(r => r.status === 'Aprovado')
    .reduce((acc, cur) => acc + cur.transporte + cur.geral, 0);
  const funcionariosReembolsados = new Set(
    reembolsos.filter(r => r.status === 'Aprovado').map(r => r.nome)
  ).size;

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Aprovação de Reembolsos</li>
          <li>Mensagens</li>
          <li>Configurações</li>
          <li>Sair</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="resumo-topo">
          <div><strong>Total de Pendentes:</strong> {totalPendentes}</div>
          <div><strong>Total Aprovado:</strong> {totalAprovado}</div>
          <div><strong>Valor Reembolsado:</strong> R$ {valorTotal}</div>
          <div><strong>Funcionários:</strong> {funcionariosReembolsados}</div>
        </div>

        <div className="tabela-reembolsos">
          <h2>Solicitações de Reembolso</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Destino</th>
                <th>Transporte (R$)</th>
                <th>Geral (R$)</th>
                <th>Total</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {reembolsos.map(r => (
                <tr key={r.id}>
                  <td>{r.nome}</td>
                  <td>{r.destino}</td>
                  <td>{r.transporte}</td>
                  <td>{r.geral}</td>
                  <td>{r.transporte + r.geral}</td>
                  <td className={r.status.toLowerCase()}>{r.status}</td>
                  <td>
                    <button
                      disabled={r.status !== 'Aguardando'}
                      onClick={() => alterarStatus(r.id, 'Aprovado')}
                    >
                      Aprovar
                    </button>
                    <button
                      disabled={r.status !== 'Aguardando'}
                      onClick={() => alterarStatus(r.id, 'Rejeitado')}
                    >
                      Rejeitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
