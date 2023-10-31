import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { getUserAction } from '../features/users/user.action';
import Spinner from './spinner/Spinner';
import { ApiStatus } from '../type/apiStatus.type';

function ProtectedPage() {

  return (
    <>
      <h2>Hello protected page</h2>
    </>
  );

};

export default ProtectedPage