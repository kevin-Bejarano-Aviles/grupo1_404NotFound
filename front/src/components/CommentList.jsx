import Comment from './Comment';
import messageIcon from '../img/icon-message.svg';
import commentExamples from '../json/postExamples.json';

function CommentList({ classList }) {

  return (
    <div className={`basis-full ${classList}`}>
          <form className='flex gap-3 basis-full p-4 border-t-2'>
            <textarea
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
              onClick={e => e.preventDefault()}
            />
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
