import { useState } from 'react';
import avatar from '../img/avatar-default.png';
import iconImage from '../img/icon-add-image.svg';

function NewState() {

  const [state, setState] = useState('¿Qué está pasando?');

  return (
    <article className='flex flex-col px-6 bg-white rounded-2xl shadow-xl'>
      <div className='flex items-center gap-4 py-5 border-b-2'>
        <img className='w-10 rounded-full' src={avatar} alt="Avatar" />
        <div className='w-full py-3 px-5 bg-pastelgray rounded-3xl overflow-auto' contentEditable type='text' onClick={() => setState(' ')}>{state}</div>
      </div>
      <div className='flex justify-around py-5'>
        <label htmlFor="file" className='flex items-center gap-2'>
          <img src={iconImage} alt="Add image" />
          Agregar mascota
        </label>
        <input type="file" id='file' className='hidden' accept='image/*' />
        <button className='py-2 px-7 text-white font-bold bg-pastelred rounded-full'>Subir</button>
      </div>
    </article>
  )
}

export default NewState;