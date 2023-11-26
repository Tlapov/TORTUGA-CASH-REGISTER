import React from 'react';
import { propsTable } from '../../type/props.type';
import "./table.scss";
import deleteIcon from "../../img/delete-icon.svg"
import Spinner from '../spinner/Spinner';

function Table({ ...props }: propsTable): React.JSX.Element {
  let content;

  const loading = (
    <tbody><tr><td><Spinner /></td></tr></tbody>
  )

  if(props.data.length){
    const headers = Object.keys(props.data[0]);
    content = (
        <>
          <thead>
            <tr>{headers.map((head, index) => (<th key={index}>{head}</th>))}<th className='delete-action'></th></tr>
          </thead>
          <tbody>
              {props.data.map((d, index) => (
                 <tr key={index}>
                  {headers.map((head, index) => (<td key={index}>{typeof d[head] === 'object' ? d[head]?.title : d[head]}</td>))}
                  <td className='delete-action' onClick={() => props.deleteToggle(d._id)}><img src={deleteIcon} alt="" /></td>
                  <td className='delete-action' onClick={() => props.editToggle(d._id)}>Edit</td>
                </tr>
              ))}
          </tbody>
        </>
    )
  }else{
    content = (
      <tbody><tr><td>No data</td></tr></tbody>
    )
  }
  
  return (
    <>
        <div className='table-title'>{props.title}</div>
        <table>{props.isLoading ? loading : content }</table>
    </>
  );
};

export default Table;