import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Navigation from '../../components/navigation/Navigation';
import { navItems } from '../../helpers/NavItems';
import { Outlet } from 'react-router-dom';
import "./admin.scss";

function Admin(): React.JSX.Element {
  const user = useAppSelector((state: RootState) => state.user);
  return (
    <main>
      <Navigation navItems={navItems.admin} />
      <Outlet />
    </main>
  );
}

export default Admin