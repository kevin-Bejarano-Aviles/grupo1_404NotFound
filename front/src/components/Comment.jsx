import { useState } from 'react';
import editIcon from '../img/icon-edit.svg';
import trashIcon from '../img/icon-trash.svg';

function Comment({ comment }) {
  const [canEditComment, setCanEditComment] = useState(false);
  const [canSaveComment, setCanSaveComment] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const handleCommentText = e => {
    if (e.target.value) {
      setCanSaveComment(true);
      setErrorState(false);
    } else {
      setCanSaveComment(false);
      setErrorState(true);
    }
  };

  const handleCancelButton = () => {
    document.getElementById(`comment-text-${comment.id}`).value = comment.text;
    setCanEditComment(false);
  };

  return (
    <div className='flex flex-col basis-full p-4 border-t-2 bg-pastelgray'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <img className='w-7 rounded-full' src={comment.urlImage} alt='Avatar' />
          <p className='font-semibold'>{comment.name} {comment.surname}</p>
        </div>
        <div className='flex gap-1'>
          <button
            className={`${canEditComment ? 'bg-white' : 'hover:bg-white cursor-pointer'} p-1 rounded-full`}
            disabled={canEditComment}
            onClick={() => setCanEditComment(true)}
            >
            <img src={editIcon} alt='Editar' />
          </button>
          <button className='p-1 cursor-pointer rounded-full hover:bg-white'>
            <img src={trashIcon} alt='Eliminar' />
          </button>
        </div>
      </div>
      <form>
        <textarea
          id={`comment-text-${comment.id}`}
          name='content'
          className={`
            w-10/12 ml-9 overflow-hidden resize-none
            ${
              canEditComment
              ? 'bg-white outline-0 border-2 border-pastelyellow rounded-sm p-1'
              : 'bg-pastelgray'
            }
          `}
          rows='2'
          disabled={!canEditComment}
          onChange={e => handleCommentText(e)}
        >
          {comment.text}
        </textarea>
        <p className={`ml-9 w-10/12 text-red-500 ${errorState ? 'block' : 'hidden'}`}>
          * El comentario no puede enviarse vacío.
        </p>
        <div className={`flex gap-2 justify-end mr-4 my-3 ${canEditComment ? '' : 'hidden'}`}>
          <input
            type='submit'
            value='Guardar'
            className={`${canSaveComment ? 'bg-pastelblue hover:bg-hoverpastelblue cursor-pointer' : 'bg-gray-300'} py-2 px-3 text-white font-semibold rounded-md`}
            disabled={!canSaveComment}
            onClick={e => e.preventDefault()}
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