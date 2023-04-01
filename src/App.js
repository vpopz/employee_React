/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/form" element={ <EmployeeForm/>} />
        </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
