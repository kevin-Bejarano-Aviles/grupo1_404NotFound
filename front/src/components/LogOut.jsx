import React from 'react';
import avatar from '../img/avatar-default.png';
import { Link } from 'react-router-dom';
function LogOut() {
  /* Array with the data to be displayed in the list of users */
   const objeto=
   {
        id: 1,
        name: 'Gonzalo',
        surname: 'Alvarez',
        usuario: 'Usuario',
        url: avatar
        
    };

  return (
    <ul>
        
            
            <li className='w-48 h-20 bg-black rounded-xl ml-auto mr-auto relative top-10 border-2 border-gray shadow-lg shadow-gray-400'>
{/*                 <div className='h-20 w-20 flex justify-center items-center ml-auto mr-auto relative top-4 rounded-full'><img src={objeto.url}  alt={objeto.name} className='rounded-full' /></div>
                <div className='mr-auto ml-auto mt-8 flex justify-center items-center'><h1>{objeto.usuario}</h1></div> */}
                 <Link to={'/'}><div className='h-10 flex justify-center items-center bg-slate-800 w-32 ml-auto mr-auto mt-4 rounded-lg text-white border-2 border-gray-600'>Cerrar Sesión</div></Link> 
              
            </li>            
             
        
    </ul>
  )
}

export default  LogOut;