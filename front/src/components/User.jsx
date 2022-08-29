import React from 'react';

function User( { item }) {
  return (
    <li className=' border-t-2 border-b-2 border-gray-300 relative top-2 mr-6 ml-6  items-center'> {/*  container box with user data */}
        <div className='ml-auto mr-auto  flex flex-row items-center'>
          <div className='h-20 w-20 flex justify-center items-center ml-4 rounded-full'><img src={item.url} alt={item.name}  className='rounded-full border-2'/></div>  {/* user image */}
          <div className=' flex justify-center items-center w-1/2'><h4 className='items-center '>{item.name} {item.surname}</h4></div> {/* user's first and last name */}
          <div className=' w-1/4 flex flxe-row  justify-end'>
            <div className=' flex flxe-row w-5/6'>
          <button className=' w-1/2 bg-blue-900 h-10 rounded-l-lg'><i class="fa-solid fa-pen-to-square"></i></button> {/* edit button */}
          <button className='bg-rose-300 w-1/2 h-10 rounded-r-lg '><i class="fa-solid fa-trash-can"></i></button></div> {/* delete button */}
          </div>
        </div>
    </li>
  )
}
export default  User;
