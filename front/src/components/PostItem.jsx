import { useState } from 'react';
import CommentList from './CommentList';
import PostItemMenu from './PostItemMenu';
import likeIcon from '../img/icon-like.svg';
import commentIcon from '../img/icon-comment.svg';
import iconThreeDots from '../img/icon-three-dots.svg';


function PostItem({ post }) {

  const [commentState, setCommentState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [disabledState, setDisabledState] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const handleModifyButton = () => {
    if (document.getElementById(`post-text-${post.id}`).value === '') {
      setErrorState(true);
    } else {
      setErrorState(false);
      setDisabledState(true);
    }
  };

  const handleCancelButton = () => {
    document.getElementById(`post-text-${post.id}`).value = post.text;
    setErrorState(false);
    setDisabledState(true);
  };

  return (
    <article className='bg-white rounded-2xl shadow-xl overflow-hidden'>
      <header className='relative flex justify-between items-center px-6 pt-4'>
        <div className='flex items-center gap-4'>
          <img className='w-10 rounded-full' src='https://www.nbcconstruction.co.uk/wp-content/uploads/2017/12/avatar-default.jpg' alt='Avatar' />
          <span className='font-semibold'>{post.name} {post.surname}</span>
        </div>
        <img
          className='p-2 rounded-full cursor-pointer hover:bg-pastelgray'
          src={iconThreeDots}
          alt='Icon Three Dots'
          onClick={() => setMenuState(!menuState)}
        />
        <PostItemMenu
          id={post.id}
          classList={menuState ? ' ' : 'hidden'}
          disabledState={disabledState}
          setDisabledState={setDisabledState}
        />
      </header>
      <section>
        <form>
          <textarea
            id={`post-text-${post.id}`}
            className={`
              w-10/12 ml-20 overflow-hidden resize-none
              ${
                disabledState
                ? 'bg-white'
                : 'bg-pastelgray outline-0 border-2 border-pastelyellow rounded-sm p-1'
              }
            `}
            rows='4'
            disabled={disabledState}
            >
              {post.text}
          </textarea>
          <p className={`ml-20 w-10/12 text-red-500 ${errorState ? 'block' : 'hidden'}`}>
            *La descripción no puede estar vacía.
          </p>
          <div className='relative'>
            <div className={`${disabledState ? 'hidden' : ''} absolute z-10 top-0 bottom-0 right-0 left-0 m-auto flex flex-col gap-3 w-max h-max`}>
              <label htmlFor='file' className='px-4 py-3 font-semibold text-white bg-pastelyellow rounded-md cursor-pointer hover:bg-hoverpastelyellow'>
                Cambiar Imagen
              </label>
              <button type='button' className='px-4 py-3 font-semibold text-white bg-pastelyellow rounded-md cursor-pointer hover:bg-hoverpastelyellow'>
                Eliminar Imagen
              </button>
            </div>
            <input type='file' id='file' className='hidden' accept='image/*' />
            <div className={`${disabledState ? '' : 'border-2 border-pastelyellow rounded-sm overflow-hidden'}`}>
              <img className={disabledState ? '' : 'opacity-50'} src={post.urlImage} alt='Example Image' />
            </div>
          </div>
          <div className={`${disabledState ? 'hidden' : ''} flex gap-2 justify-end pr-4 py-3 border-b-2`}>
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
      </section>
      <footer className='flex flex-wrap'>
        <button className='flex justify-center gap-2 basis-2/4 py-5 cursor-pointer hover:bg-pastelgray'>
          <img src={likeIcon} alt='Like' />
          <span>Like</span>
        </button>
        <button
          className='flex justify-center gap-2 basis-2/4 py-5 cursor-pointer hover:bg-pastelgray'
          onClick={() => setCommentState(!commentState)}
        >
          <img src={commentIcon} alt='Comment' />
          <span>Comment</span>
        </button>
        <CommentList classList={commentState ? ' ' : 'hidden'} />
      </footer>
    </article>
  )
}

export default PostItem;
