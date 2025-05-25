import React from 'react';
import Sidebar from '../components/Sidebar';
import Resumo from '../components/Resumo';
import TabelaReembolsos from '../components/TabelaReembolsos';
import SolicitacoesRecentes from '../components/SolicitacoesRecentes';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Resumo />
        <div className="main-grid">
          <TabelaReembolsos />
          <SolicitacoesRecentes />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
