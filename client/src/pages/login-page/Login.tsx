import React from 'react';
import "./login.scss"
import InputField from '../../components/input-field/InputField';
import Spinner from '../../components/spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { loginUserAction } from '../../features/users/user.action';
import { Navigate, useNavigate } from 'react-router-dom';
import { ApiStatus } from '../../type/apiStatus.type';
import { ILoginUser } from '../../type/user.type';


function Login() {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const data: ILoginUser = {username, password};
    if(username && password){
      await dispatch(loginUserAction({data, navigate}));
    };
  };
  
  return (
    <>  
        {user.loginUserStatus === ApiStatus.loading && <Spinner />}
        {user.token  ?  <Navigate to={"/"} /> : (
          <section className='login'>
            <div className='login-background'></div>
            <form className='login-form'>
              <h1>DOBRODOŠLI U SUSTAV <span style={{color:"red"}}>PRIJAVE TORTUGA E-CASH</span></h1>
              <InputField 
                  type= {"text"}
                  name= {"username"}
                  value = {username}
                  setValue = {setUsername}

              />
              <InputField 
                  type= {"password"}
                  name= {"password"}
                  value = {password}
                  setValue = {setPassword}
              />
              <button disabled={username && password ? false : true} onClick={onSubmit}>Login</button>
            </form>
        </section>
        )}
        
    </>
  )
}

export default Login