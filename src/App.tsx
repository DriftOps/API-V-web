import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Despesas from './pages/Despesas';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/despesas" element={<Despesas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
