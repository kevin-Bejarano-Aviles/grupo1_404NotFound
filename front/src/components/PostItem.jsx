import { useState } from 'react';
import Comment from './Comment';
import avatar from '../img/avatar-default.png';
import imgPostExample from '../img/post-example.png';
import likeIcon from '../img/icon-like.svg';
import commentIcon from '../img/icon-comment.svg';
import messageIcon from '../img/icon-message.svg';
import iconThreeDots from '../img/icon-three-dots.svg';
import PostItemOptions from './PostItemOptions';

function PostItem({ item }) {

  const comments = [
    {
      id: 1,
      urlImage: avatar,
      name: 'Nombre',
      surname: 'Apellido',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!'
    },
    {
      id: 2,
      urlImage: avatar,
      name: 'Nombre',
      surname: 'Apellido',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!'
    }
  ];

  const [commentState, setCommentState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [disabledState, setDisabledState] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const sendComment = e => {
    e.preventDefault();
    console.log(e.target.previousElementSibling.value);
  };

  const handleModifyButton = () => {
    if (document.getElementById('postbody').value === '') {
      setErrorState(true);
    } else {
      setErrorState(false);
      setDisabledState(true);
    }
  };

  const handleCancelButton = () => {
    setErrorState(false);
    setDisabledState(true);
    document.getElementById('postbody').value = item.post;
  };

  return (
    <article className='bg-white rounded-2xl shadow-xl overflow-hidden'>
      <header className='relative flex justify-between items-center px-6 pt-4'>
        <div className='flex items-center gap-4'>
          <img className='w-10 rounded-full' src={avatar} alt='Avatar' />
          <span className='font-semibold'>{item.name} {item.surname}</span>
        </div>
        <img
          className='p-2 rounded-full hover:bg-pastelgray'
          src={iconThreeDots}
          alt='Icon Three Dots'
          onClick={() => setMenuState(!menuState)}
        />
        {/** Start of hidden menu */}
        <PostItemOptions
          classList={menuState ? ' ' : 'hidden'}
          disabledState={disabledState}
          setDisabledState={setDisabledState}
        />
        {/** End of hidden menu */}
      </header>
      <section>
        <form>
          <textarea
            id='postbody'
            className={`w-10/12 ml-20 overflow-hidden resize-none ${disabledState ? 'bg-white' : 'bg-pastelgray'}`}
            rows='4'
            disabled={disabledState}
            >
              {item.post}
          </textarea>
          <p className={`ml-20 w-10/12 text-red-500 ${errorState ? 'block' : 'hidden'}`}>
            *La descripción no puede estar vacía.
          </p>
          <div className={`flex gap-2 justify-end mr-4 mb-3 ${disabledState ? 'hidden' : ' '}`}>
            <input
              type='button'
              value='Modificar'
              className='py-1 px-3 text-white font-semibold rounded-full bg-pastelblue'
              onClick={() => handleModifyButton()}
            />
            <input
              type='button'
              value='Cancelar'
              className='py-1 px-3 text-white font-semibold rounded-full bg-pastelblue'
              onClick={() => handleCancelButton()}
            />
          </div>
        </form>
        <img src={imgPostExample} alt='Example Image' />
      </section>
      <footer className='flex flex-wrap'>
        <button className='flex justify-center gap-2 basis-2/4 py-5'>
          <img src={likeIcon} alt='Like' />
          <span>Like</span>
        </button>
        <button
          className='flex justify-center gap-2 basis-2/4 py-5'
          onClick={() => setCommentState(!commentState)}
        >
          <img src={commentIcon} alt='Comment' />
          <span>Comment</span>
        </button>
        {/** Start of hidden comments */}
        <div className={`basis-full ${commentState ? ' ' : 'hidden'}`}>
          <form className='flex gap-3 basis-full p-4 border-t-2'>
            <textarea
            name=''
            rows='3'
            placeholder='Agregar un comentario...'
            className='w-full py-3 px-5 bg-pastelgray rounded-xl overflow-hidden resize-none'
          >
          </textarea>
            <input
              type='image'
              className='self-start py-2 px-2 text-white font-semibold bg-pastelred rounded-full'
              src={messageIcon}
              onClick={e => sendComment(e)}
            />
          </form>
          <ul>
            {
              comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))
            }
          </ul>
        </div>
        {/** End of hidden comments */}
      </footer>
    </article>
  )
}

export default PostItem;
