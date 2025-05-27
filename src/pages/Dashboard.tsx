import React from 'react';
import Sidebar from '../components/Sidebar';
import Resumo from '../components/Resumo';
import TabelaReembolsos from '../components/TabelaReembolsos';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <Resumo />
        <div className="main-grid">
          <TabelaReembolsos />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
