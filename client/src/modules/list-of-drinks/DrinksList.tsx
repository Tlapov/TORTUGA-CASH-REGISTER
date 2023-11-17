import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { deleteDrinkAction, getDrinkAction } from '../../features/drinks/drinks.action';
import { ApiStatus } from '../../type/apiStatus.type';
import Table from '../../components/table/Table';

const DrinksList = (): React.JSX.Element => {
  const drink = useAppSelector((state: RootState) => state.drink);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      await dispatch(getDrinkAction());
    })();
  },[]);

  const handleDelete = async(id: number) => {
    await dispatch(deleteDrinkAction(id));
  };

  return (
    <section>
      <div className='action-btn'><button type='button'>Add</button></div>
        <Table 
          data={drink.data} 
          isLoading={drink.status === ApiStatus.loading} 
          title='Lista pića'
          deleteToggle={handleDelete}/>
    </section>
  )
};

export default DrinksList