import React, { useState } from 'react';
import './Sidebar.css';
import { FaChartPie, FaMoneyCheckAlt, FaEnvelope, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
        <ul className="sidebar-menu">
          <li><FaChartPie /> <span>Dashboard</span></li>
          <li><FaMoneyCheckAlt /> <span>Aprovação de Reembolsos</span></li>
          <li><FaEnvelope /> <span>Mensagens</span></li>
          <li><FaCog /> <span>Configurações</span></li>
          <li><FaSignOutAlt /> <span>Sair</span></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
