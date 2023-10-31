import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login-page/Login';
import Admin from './pages/home-page/Admin';
import ProtectedPage from './components/ProtectedAdminPage';
import { userRole } from './type/user.type';
import Employee from './pages/home-page/Employee';
import Home from './pages/home-page/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="employee" element={<Employee/>} /> 
          <Route path="admin" element={<Admin/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
