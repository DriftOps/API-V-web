import React, { useEffect, useState } from 'react';
import './Despesas.css';

const Despesas: React.FC = () => {
  const [reembolsos, setReembolsos] = useState<any[]>([]);
  const [detalhesVisiveis, setDetalhesVisiveis] = useState<string | null>(null);

  const buscarReembolsos = async () => {
    try {
      const response = await fetch('http://localhost:3000/refunds', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await response.json();
      setReembolsos(json.body);
    } catch (error) {
      console.error('Erro ao buscar reembolsos:', error);
    }
  };

const atualizarStatus = async (id: string, status: string) => {
  try {
    const response = await fetch(`http://localhost:3000/refunds/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Reembolso ${status === 'Aprovado' ? 'aprovado' : 'reprovado'} com sucesso!`);
      buscarReembolsos();
    } else {
      alert(data.body.text || 'Erro ao atualizar status');
    }
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    alert('Erro ao atualizar status');
  }
};

  const toggleDetalhes = (id: string) => {
    setDetalhesVisiveis((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    buscarReembolsos();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/documento.pdf';
    link.setAttribute('download', 'documento.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  

  return (
    <div className="dashboard">
      <div className="content">
        <h1>Solicitações de Reembolso</h1>
        <table className="tabela">
          <thead>
            <tr>
              <th>Data</th>
              <th>Projeto</th>
              <th>Usuário</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {reembolsos.map((r) => (
              <React.Fragment key={r._id}>
                <tr>
                  <td>{new Date(r.data).toLocaleDateString('pt-BR')}</td>
                  <td>{r.projeto_nome}</td>
                  <td>{r.usuario_nome}</td>
                  <td>{r.status || 'Pendente'}</td>
                  <td>
                <button onClick={() => atualizarStatus(r._id, 'Aprovado')} className="btn-aprovar">
                  Aprovar
                </button>
                <button onClick={() => atualizarStatus(r._id, 'Reprovado')} className="btn-reprovar">
                  Reprovar
                </button>
                    <button
                      onClick={() => toggleDetalhes(r._id)}
                      className="btn-detalhes"
                    >
                      {detalhesVisiveis === r._id ? 'Ocultar' : 'Ver Detalhes'}
                    </button>
                  </td>
                </tr>
                {detalhesVisiveis === r._id && (
                  <tr>
                    <td colSpan={5}>
                      <div className="detalhes-container">
                        <h4>Itens Solicitados:</h4>
                        <ul>
                          {r.refunds.map((item: any, idx: number) => (
                            <li key={idx}>
                              <strong>{item.tipo}</strong> - R$ {item.valor} - {item.estabelecimento}{' '}
                              {item.km ? `- ${item.km} km` : ''}
                              {item.imagens && item.imagens.length > 0 && (
                                <div className="downloads-container">
                            <button onClick={handleDownload}>
                            Baixar comprovante
                            </button>
                            </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Despesas;
