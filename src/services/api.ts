// src/services/api.ts

// Exemplo com Axios:
// import axios from 'axios';
// const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export async function getSolicitacoesRecentes() {
    // return await api.get('/solicitacoes');
    
    // Por enquanto retornamos mock local:
    return [
      { id: 1, funcionario: 'João Silva', destino: 'São Paulo', data: '2025-05-20' },
      { id: 2, funcionario: 'Maria Oliveira', destino: 'Curitiba', data: '2025-05-21' },
      { id: 3, funcionario: 'Carlos Souza', destino: 'Belo Horizonte', data: '2025-05-22' },
    ];
  }
  