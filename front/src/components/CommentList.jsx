import { useState } from 'react';
import Comment from './Comment';
import messageIcon from '../img/icon-message.svg';
import commentExamples from '../json/commentExamples.json';

function CommentList({ classList, id }) {
  const [canSendComment, setcanSendComment] = useState(false);

  const handleNewCommentInput = e => {
    e.target.value ? setcanSendComment(true) : setcanSendComment(false);
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
            onChange={e => handleNewCommentInput(e)}
          >
          </textarea>
          <input
            type='image'
            className={`${canSendComment ? 'bg-pastelred cursor-pointer' : 'bg-gray-300'} self-start py-2 px-2 text-white font-semibold rounded-full`}
            src={messageIcon}
            disabled={!canSendComment}
            onClick={e => e.preventDefault()}
          />
        </div>
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
