import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserAction } from '../features/users/user.action';
import Spinner from './spinner/Spinner';
import { ApiStatus } from '../type/apiStatus.type';


function Redirect(): React.JSX.Element {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  React.useEffect(() => {  
    (async () => {
      if(!localStorage.getItem("user")){
        navigate("/login");
      }else{
        await dispatch(getUserAction(navigate));
      };
    })();
  },[]);

  return (
    <>
      {user.data?.userType === "taskmaster" && <Navigate to={"admin"}/>}
      {user.data?.userType === "employee" && <Navigate to={"employee"}/>}
      {user.getUserStatus === ApiStatus.loading && <Spinner />}
    </>   
  )
  
};

export default Redirect