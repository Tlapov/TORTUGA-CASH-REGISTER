import React from 'react'
import { NavLink } from 'react-router-dom';
import { propsNav } from '../../type/props.type';


const Navigation = ({navItems}: propsNav): React.JSX.Element => {
  return (
    <nav>
         <ul>
          {navItems.map((item) => (
            <li key={item.id}><NavLink to={item.path}>{item.pathName}</NavLink></li>
          ))}
        </ul>
    </nav>
  )
};

export default Navigation