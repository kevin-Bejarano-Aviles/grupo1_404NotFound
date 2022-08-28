import { useState } from 'react';
import Comment from './Comment';
import messageIcon from '../img/icon-message.svg';
import commentExamples from '../json/commentExamples.json';

function CommentList({ classList, id }) {
  const [errorState, setErrorState] = useState(false);

  const handleSendCommentButton = e => {
    e.preventDefault();
    const newCommentInputElement = document.getElementById(`new-comment-input-${id}`);
    newCommentInputElement.value ? setErrorState(false) : setErrorState (true);
  };

  return (
    <div className={`basis-full ${classList}`}>
          <form className='p-4 border-t-2'>
            <div className='flex gap-3'>
              <textarea
                id={`new-comment-input-${id}`}
                name=''
                rows='3'
                placeholder='Agregar un comentario...'
                className='w-full py-3 px-5 bg-pastelgray outline-0 rounded-xl overflow-hidden resize-none'
              >
              </textarea>
              <input
                type='image'
                className='self-start py-2 px-2 text-white font-semibold bg-pastelred rounded-full'
                src={messageIcon}
                onClick={e => handleSendCommentButton(e)}
              />
            </div>
            <p className={`w-full mt-2 text-red-500 ${errorState ? 'block' : 'hidden'}`}>
              * No es posible enviar un comentario vacío.
            </p>
          </form>
          <ul>
            {
              commentExamples.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))
            }
          </ul>
        </div>
  )
}

export default CommentList;
