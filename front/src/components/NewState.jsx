import { useState } from 'react';
import iconImage from '../img/icon-add-image.svg';

function NewState() {
  const [errorState, setErrorState] = useState(false);

  const handlePostButton = e => {
    e.preventDefault();
    const newStateInputElement = document.getElementById('new-state-input');
    newStateInputElement.value ? setErrorState(false) : setErrorState (true);
  };

  return (
    <article className='flex flex-col px-6 bg-white rounded-2xl shadow-xl'>
      <form>
        <div className='flex items-center flex-wrap gap-4 py-5 border-b-2'>
          <img className='w-10 rounded-full self-start' src='https://www.nbcconstruction.co.uk/wp-content/uploads/2017/12/avatar-default.jpg' alt='Avatar' />
          <textarea
            id='new-state-input'
            name=''
            rows='4'
            placeholder='¿Qué está pasando?'
            className='w-full py-3 px-5 bg-pastelgray rounded-xl overflow-hidden resize-none outline-0'
          >
          </textarea>
          <p className={`w-full text-red-500 ${errorState ? 'block' : 'hidden'}`}>
            * La publicación no puede estar vacía.
          </p>
        </div>
        <div className='flex justify-around items-center py-5'>
          <label htmlFor='file' className='flex items-center gap-2 py-3 px-4 rounded-full cursor-pointer hover:bg-pastelgray'>
            <img src={iconImage} alt='Add image' />
            Agregar mascota
          </label>
          <input type='file' id='file' className='hidden' accept='image/*' />
          <button
            type='submit'
            className='py-2 px-7 text-white font-bold bg-pastelred rounded-md hover:bg-hoverpastelred'
            onClick={e => handlePostButton(e)}
          >
            Publicar
          </button>
        </div>
      </form>
    </article>
  )
}

export default NewState;