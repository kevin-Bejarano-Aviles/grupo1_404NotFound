import { useState } from 'react';
import editIcon from '../img/icon-edit.svg';
import trashIcon from '../img/icon-trash.svg';

function Comment({ comment }) {

  const [isCommentOn, setIsCommentOn] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleModifyButton = () => {
    if (document.getElementById(`comment-text-${comment.id}`).value === '') {
      setErrorState(true);
    } else {
      setErrorState(false);
      setIsCommentOn(false);
    }
  };

  const handleCancelButton = () => {
    document.getElementById(`comment-text-${comment.id}`).value = comment.text;
    setErrorState(false);
    setIsCommentOn(false);
  };

  return (
    <div className='flex flex-col basis-full p-4 border-t-2 bg-pastelgray'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <img className='w-7 rounded-full' src={comment.urlImage} alt='Avatar' />
          <p className='font-semibold'>{comment.name} {comment.surname}</p>
        </div>
        <div className='flex gap-1'>
          <img
            className='p-1 cursor-pointer rounded-full hover:bg-white'
            src={editIcon}
            alt='Editar'
            onClick={() => setIsCommentOn(true)}
          />
          <img
            className='p-1 cursor-pointer rounded-full hover:bg-white'
            src={trashIcon}
            alt='Eliminar'
            onClick={() => {}}
          />
        </div>
      </div>
      <form>
        <textarea
          id={`comment-text-${comment.id}`}
          className={`
            w-10/12 ml-9 overflow-hidden resize-none
            ${
              isCommentOn
              ? 'bg-white outline-0 border-2 border-pastelyellow rounded-sm p-1'
              : 'bg-pastelgray'
            }
          `}
          rows='2'
          disabled={!isCommentOn}
        >
          {comment.text}
        </textarea>
        <p className={`ml-10 w-10/12 text-red-500 ${errorState ? 'block' : 'hidden'}`}>
          *La descripción no puede estar vacía.
        </p>
        <div className={`flex gap-2 justify-end mr-4 my-3 ${isCommentOn ? '' : 'hidden'}`}>
          <input
            type='button'
            value='Guardar'
            className='py-2 px-3 text-white font-semibold rounded-md cursor-pointer bg-pastelblue hover:bg-hoverpastelblue'
            onClick={() => handleModifyButton()}
          />
          <input
            type='button'
            value='Cancelar'
            className='py-2 px-3 text-white font-semibold rounded-md cursor-pointer bg-pastelblue hover:bg-hoverpastelblue'
            onClick={() => handleCancelButton()}
          />
        </div>
      </form>
    </div>
  )
}

export default Comment;