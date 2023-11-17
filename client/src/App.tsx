import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login-page/Login';
import Admin from './pages/admin-page/Admin';
import Employee from './pages/home-page/Employee';
import Redirect from './components/Redirect';
import DrinksList from './modules/list-of-drinks/DrinksList';
import EmployeesList from './modules/employees/EmployeesList';
import Category from './modules/category-of-drings/Category';
import AddCategory from './modules/category-of-drings/AddCategory';

function App() {
  console.log("Hello world")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Redirect />} />
          <Route path="admin" element={<Admin/>} >
            <Route path="kategorije-pica" element={<Category />} />
            <Route path="dodaj-kategoriju-pica" element={<AddCategory />} />
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
