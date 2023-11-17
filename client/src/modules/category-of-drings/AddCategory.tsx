import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { createCategoryAction, getCategoryAction } from '../../features/category/category.action';
import InputField from '../../components/input-field/InputField';
import { useNavigate } from 'react-router-dom';


function AddCategory(): React.JSX.Element {
  const category = useAppSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const data: any = {title, active};
    if(title){
      await dispatch(createCategoryAction({data, navigate}));
    };
  };
  
  return (
    <div className='add-category-container'>
        <h1>Add category</h1>
        <form action="">
            <InputField 
                  type= {"text"}
                  name= {"Kategorija"}
                  value = {title}
                  setValue = {setTitle}

              />
              {/* <InputField 
                type= {"checkbox"}
                name= {"Active"}
                value = {active}
                setValue = {setActive}
              /> */}
              <label htmlFor="">Active</label>
              <input type="checkbox" name="Active" checked={active} onChange={e => setActive(e.target.checked)} />
              <button onClick={onSubmit}>add</button>
        </form>
    </div>
  )
};

export default AddCategory