import { useState } from 'react';
import editIcon from '../img/icon-edit.svg';
import trashIcon from '../img/icon-trash.svg';

function PostItemMenu({ classList, disabledState, setDisabledState }) {

  const [warningState, setWarningState] = useState(false);

  const editPost = () => {
    setDisabledState(false);
    document.getElementById('post-text').focus();
  };

  const showWarning = () => {
    setWarningState(true);
  }

  return (
    <div className={`${classList} absolute right-16`}>
      <ul className='flex gap-1'>
        <li>
          <img
            className={`${disabledState ? '' : 'bg-pastelgray'} p-2 rounded-full cursor-pointer hover:bg-pastelgray`}
            src={editIcon}
            alt='Editar Publicación'
            onClick={() => editPost()}
          />
        </li>
        <li>
          <img
            className='p-2 rounded-full cursor-pointer hover:bg-pastelgray'
            src={trashIcon}
            alt='Eliminar Publicación'
            onClick={() => showWarning()}
            />
        </li>
      </ul>
      <div className={`${warningState ? '': 'hidden'} fixed z-50 right-0 left-0 top-0 bottom-0 flex flex-col justify-center items-center gap-6 m-auto max-w-lg h-60 bg-white rounded-xl`}>
        <p>¿Seguro que desea eliminar esta publicación?</p>
        <div className='flex gap-6'>
          <button className='py-2 px-4 font-semibold text-white rounded-md bg-pastelred'>Eliminar</button>
          <button className='py-2 px-4 font-semibold text-white rounded-md bg-pastelblue' onClick={() => setWarningState(false)}>Cancelar</button>
        </div>
      </div>
      <div className={`${warningState ? '' : 'hidden'} fixed z-40 right-0 left-0 top-0 bottom-0 m-auto bg-black opacity-70`}></div>
    </div>
  )
}

export default PostItemMenu;