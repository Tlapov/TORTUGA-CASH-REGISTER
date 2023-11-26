import React from 'react';
import "./login.scss"
import InputField from '../../components/input-field/InputField';
import Spinner from '../../components/spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { loginUserAction } from '../../features/users/user.action';
import { Navigate, useNavigate } from 'react-router-dom';
import { ApiStatus } from '../../type/apiStatus.type';
import { useForm } from '../../helpers/useForm';


function Login() {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {data, errors, handleChange} = useForm({
      username: {
        value: "",
        required: true,
        custom: {
          isValid: (value: string) => value.length > 4,
          message: 'Polje username mora biti dugačko najmanje 4 slova',
        },
      },
      password: {
        value: "",
        required: true
      }
  });

  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if(Object.keys(errors).length === 0) {
      await dispatch(loginUserAction({data, navigate}));
    }
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
                value = {data.username}
                handleInput = {handleChange}
                error = {errors.hasOwnProperty('username') ? errors?.username : null}
            />
            <InputField 
                type= {"password"}
                name= {"password"}
                value = {data.password}
                handleInput = {handleChange}
                error = {errors.hasOwnProperty('password') ? errors?.password : null}
              />
            <button onSubmit={onSubmit}>Login</button>
          </form>
        </section>
      )}
        
    </>
  )
}

export default Login