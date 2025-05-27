import React, { useState } from 'react';
import './Sidebar.css';
import { FaChartPie, FaMoneyCheckAlt, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
        <ul className="sidebar-menu">
          <a href='/dashboard'><li><FaChartPie /> <span>Dashboard</span></li></a>
          <a href='/despesas'><li><FaMoneyCheckAlt /> <span>Aprovação de Reembolsos</span></li></a>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
