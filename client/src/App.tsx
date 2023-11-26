import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login-page/Login';
import Admin from './pages/admin-page/Admin';
import Employee from './pages/home-page/Employee';
import Redirect from './components/Redirect';
import DrinksList from './modules/list-of-drinks/DrinksList';
import EmployeesList from './modules/employees/EmployeesList';
import Category from './modules/category-of-drinks/Category';
import EditCategory from './modules/category-of-drinks/EditCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Redirect />} /><Route path="/:id" element={<Admin />} />
          <Route path="admin" element={<Admin/>} >
            <Route index element={<Navigate to={"kategorije-pica"} replace />} />
            <Route index path="kategorije-pica" element={<Category />} />
            <Route path="uredi-kategoriju-pica" element={<EditCategory />} />
            <Route path="popis-pica" element={<DrinksList />} />
            <Route path="zaposlenici" element={<EmployeesList />} />
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
