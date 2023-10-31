import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  const user = useAppSelector((state: RootState) => state.user);
  return (
    <>
      <nav>Admin</nav>
      <Link to={"home"}>Home</Link>
      <Outlet></Outlet>
    </>
  )
}

export default Admin