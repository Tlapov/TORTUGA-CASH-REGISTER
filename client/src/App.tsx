import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login-page/Login';
import Admin from './pages/admin-page/Admin';
import Employee from './pages/home-page/Employee';
import Redirect from './components/Redirect';
import DrinksList from './modules/list-of-drinks/DrinksList';
import EmployeesList from './modules/employees/EmployeesList';
import CategoryDrinks from './modules/category-of-drings/CategoryDrinks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Redirect />} />
          <Route path="/admin" element={<Admin/>} >
            <Route path="kategorije-pica" element={<CategoryDrinks />} />
            <Route path="popis-pica" element={<EmployeesList />} />
            <Route path="zaposlenici" element={<DrinksList />} />
            <Route path="blagajna" element={<h1>Blagajna</h1>} />
            <Route path="upute" element={<h1>Upute</h1>} />
          </Route>
          <Route path="employee" element={<Employee/>} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
