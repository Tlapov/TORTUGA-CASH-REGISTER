import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { createCategoryAction, getCategoryAction, updateCategoryAction } from '../../features/category/category.action';
import InputField from '../../components/input-field/InputField';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../helpers/useForm';


function EditCategory(): React.JSX.Element {
  const category = useAppSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const findCategory = category.data.find(d => d._id === location.state);

  const {data, errors, handleChange} = useForm({
    title: {
      value: findCategory ? findCategory.title : "",
      required: true,
      custom: {
        isValid: (value: string) => value.length >= 4,
        message: 'Polje username mora biti dugačko najmanje 4 slova',
      },
    },
    active: {
      value: findCategory !== undefined ? findCategory.active as boolean : true
    }
  });

  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if(Object.keys(errors).length === 0){
      if(findCategory !== undefined) {
        const id = location.state;
        await dispatch(updateCategoryAction({id, data, navigate}));
      }else{
        await dispatch(createCategoryAction({data, navigate}));
      }
    };
  };
  
  return (
    <div className='add-category-container'>
        <h1>{ findCategory !== undefined ? `Uredi ${findCategory.title}` : "Dodaj kategoriju"}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <InputField 
                type= {"text"}
                name= {"title"}
                value = {data.title}
                handleInput = {handleChange}
                error = {errors.hasOwnProperty('title') ? errors?.title : null}
            />
            <InputField 
                type= {"checkbox"}
                name= {"active"}
                value = {data.active}
                handleInput = {handleChange}
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
};

export default EditCategory