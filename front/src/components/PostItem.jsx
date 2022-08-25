import { useState } from 'react';
import Comment from './Comment';
import avatar from '../img/avatar-default.png';
import imgPostExample from '../img/post-example.png';
import likeIcon from '../img/icon-like.svg';
import commentIcon from '../img/icon-comment.svg';
import messageIcon from '../img/icon-message.svg';
import iconThreeDots from '../img/icon-three-dots.svg';

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

  const [state, setState] = useState(false);

  const toggleState = () => {
    state ? setState(false) : setState(true);
  };

  const sendComment = e => {
    e.preventDefault();
    console.log(e.target.previousElementSibling.value);
  };

  return (
    <article className='bg-white rounded-2xl shadow-xl overflow-hidden'>
      <header className='flex justify-between px-6 pt-4'>
        <div className='flex items-center gap-4'>
          <img className='w-10 rounded-full' src={avatar} alt="Avatar" />
          <span className='font-semibold'>{item.name} {item.surname}</span>
        </div>
        <img src={iconThreeDots} alt='Icon Three Dots'/>
      </header>
      <section>
        <p className='pl-20 pr-6 pb-4'>{item.post}</p>
        <img src={imgPostExample} alt='Example Image' />
      </section>
      <footer className='flex flex-wrap'>
        <button className='flex justify-center gap-2 basis-2/4 py-5'>
          <img src={likeIcon} alt="Like" />
          <span>Like</span>
        </button>
        <button className='flex justify-center gap-2 basis-2/4 py-5' onClick={() => toggleState()}>
          <img src={commentIcon} alt="Comment" />
          <span>Comment</span>
        </button>
        {/** Start of hidden comments */}
        <div className={`basis-full ${state ? 'hola' : 'hidden'}`}>
          <form className='flex gap-3 basis-full p-4 border-t-2'>
            <input className='grow px-4 bg-pastelgray rounded-3xl' type='text' placeholder='Agregar un comentario...' />
            <input className='py-2 px-2 text-white font-semibold bg-pastelred rounded-full' type='image' src={messageIcon} onClick={e => sendComment(e)}/>
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
