// App.tsx
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Summary from './components/Resumo';
import TabelaReembolsos from './components/TabelaReembolsos';
import RecentRequests from './components/SolicitacoesRecentes';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Summary />
        <TabelaReembolsos />
        <RecentRequests />
      </main>
    </div>
  );
}

export default App;