import { useState } from 'react';
import editIcon from '../img/icon-edit.svg';
import trashIcon from '../img/icon-trash.svg';

function PostItemMenu({ hiddenClass, canEditPost, setCanEditPost }) {
  const [showWarningState, setShowWarningState] = useState(false);

  return (
    <div className={`${hiddenClass} absolute right-16`}>
      <ul className='flex gap-1'>
        <li>
          <button
            className={`${canEditPost ? 'bg-pastelgray' : 'cursor-pointer'} p-2 rounded-full hover:bg-pastelgray`}
            disabled={canEditPost}
            onClick={() => setCanEditPost(true)}
            >
            <img src={editIcon} alt='Editar Publicación' />
          </button>
        </li>
        <li>
          <button
            className='p-2 rounded-full cursor-pointer hover:bg-pastelgray'
            onClick={() => setShowWarningState(true)}
            >
            <img src={trashIcon} alt='Eliminar Publicación' />
          </button>
        </li>
      </ul>
      <form>
        <div className={`${showWarningState ? '' : 'hidden'} fixed z-50 right-0 left-0 top-0 bottom-0 flex flex-col justify-center items-center gap-6 m-auto max-w-lg h-60 bg-white rounded-xl`}>
          <p>¿Seguro que desea eliminar esta publicación?</p>
          <div className='flex gap-6'>
            <button
              type='submit'
              className='py-2 px-4 font-semibold text-white rounded-md bg-pastelred'
              onClick={e => e.preventDefault()}
              >
              Eliminar
            </button>
            <button
              type='button'
              className='py-2 px-4 font-semibold text-white rounded-md bg-pastelblue'
              onClick={() => setShowWarningState(false)}
              >
              Cancelar
            </button>
          </div>
        </div>
      </form>
      <div className={`${showWarningState ? '' : 'hidden'} fixed z-40 right-0 left-0 top-0 bottom-0 m-auto bg-black opacity-70`}></div>
    </div>
  )
}

export default PostItemMenu;