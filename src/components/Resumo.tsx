import React from 'react';
import './Resumo.css';

const Resumo: React.FC = () => {
  return (
    <div className="resumo-container">
      <div className="resumo-card destaque">
        <h3>Reembolsos Pendentes</h3>
        <p>12</p>
      </div>
      <div className="resumo-card aprovado">
        <h3>Total Aprovado</h3>
        <p>R$ 4.320,00</p>
      </div>
      <div className="resumo-card total">
        <h3>Valor Total Reembolsado</h3>
        <p>R$ 8.940,00</p>
      </div>
      <div className="resumo-card funcionarios">
        <h3>Funcionários Reembolsados</h3>
        <p>17</p>
      </div>
    </div>
  );
};

export default Resumo;
