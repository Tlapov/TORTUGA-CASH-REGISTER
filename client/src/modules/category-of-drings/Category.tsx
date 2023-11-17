import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { deleteCategoryAction, getCategoryAction } from '../../features/category/category.action';
import Table from '../../components/table/Table';
import { ApiStatus } from '../../type/apiStatus.type';
import { Link } from 'react-router-dom';

function Category(): React.JSX.Element {
  const category = useAppSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();

  const handleDelete = async(x: any) => {
    await dispatch(deleteCategoryAction(x));
  };

  console.log(category)

  React.useEffect(() => {
    (async () => {
      await dispatch(getCategoryAction());
    })();
  },[]);

  return (
      <section>
        <div className='action-btn'><Link to={"../dodaj-kategoriju-pica"}>Add</Link></div>
        <Table 
          data={category.data} 
          isLoading={category.status === ApiStatus.loading} 
          title='Popis kategorija'
          deleteToggle={handleDelete}/>
      </section>
  )
};

export default Category