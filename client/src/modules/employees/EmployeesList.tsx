import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ApiStatus } from '../../type/apiStatus.type';
import { getDrinkAction } from '../../features/drinks/drinks.action';
import Table from '../../components/table/Table';

const EmployeesList = (): React.JSX.Element => {
  // const drink = useAppSelector((state: RootState) => state.drink);
  // const dispatch = useAppDispatch();

  // console.log()

  // React.useEffect(() => {
  //   (async () => {
  //     await dispatch(getDrinkAction());
  //   })();
  // },[]);

  // return (
  //   <section>
  //       <Table data={drink.data} isLoading={drink.status === ApiStatus.loading} />
  //   </section>
  // )
  return(
    <div>Emloyees list</div>
  )
};

export default EmployeesList