import React from 'react';
import Spinner from '../../components/spinner/Spinner';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { getUserAction } from '../../features/users/user.action';
import { ApiStatus } from '../../type/apiStatus.type';

function Home() {
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

export default Home


