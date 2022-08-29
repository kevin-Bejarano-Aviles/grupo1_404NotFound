import React from 'react';
import avatar from '../img/avatar-default.png';
import User from './User';
function UserList() {
  /* Array with the data to be displayed in the list of users */
   const array=[
    {
        id: 1,
        name: 'Kevin',
        surname: 'Aviles',
        url: avatar
        
      },
      {
        id: 2,
        name: 'Camila',
        surname: 'Aguirre',
        url: avatar
      },
      {
        id: 3,
        name: 'Victoria',
        surname: 'Gonzalez',
        url: avatar
      },
      {
        id: 4,
        name: 'Guadalupe',
        surname: 'Garcilazo',
        url: avatar
      },
      {
        id: 5,
        name: 'Lautaro',
        surname: 'Coria',
        url: avatar
      },
      {
        id: 6,
        name: 'Sofia',
        surname: 'Serrano',
        url: avatar
      },
      {
        id: 7,
        name: 'Gonzalo',
        surname: 'Alvarez',
        url: avatar
      },
   ];

  return (
    <ul>
        {
            array.map (item=>(
                <User key={item.id}  item={item} />
            )) 
        }
    </ul>
  )
}

export default  UserList;