import avatar from '../img/avatar-default.png';
import imgPostExample from '../img/post-example.png';
import likeIcon from '../img/icon-like.svg';
import commentIcon from '../img/icon-comment.svg';
import messageIcon from '../img/icon-message.svg';

import iconThreeDots from '../img/icon-three-dots.svg';

function PostItem({ item }) {

  const comment = () => {

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
        <button className='flex justify-center gap-2 basis-2/4 py-5' onClick={comment()}>
          <img src={commentIcon} alt="Comment" />
          <span>Comment</span>
        </button>
        {/** Enviar comentario oculto */}
        <form className='flex gap-3 basis-full p-4 border-t-2'>
          <input className='grow px-4 bg-pastelgray rounded-3xl' type='text' placeholder='Agregar un comentario...' />
          <input className='py-2 px-2 text-white font-semibold bg-pastelred rounded-full' type='image' src={messageIcon} />
        </form>
        {/** Ver comentarios ocultos */}
        <div className='flex flex-col basis-full p-4 border-t-2 bg-pastelgray'>
          <div className='flex items-center gap-2 '>
            <img className='w-7 rounded-full' src={avatar} alt="Avatar" />
            <p className='font-semibold'>Nombre Completo</p>
          </div>
          <p className='pl-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!</p>
        </div>
        <div className='flex flex-col basis-full p-4 border-t-2 bg-pastelgray'>
          <div className='flex items-center gap-2 '>
            <img className='w-7 rounded-full' src={avatar} alt="Avatar" />
            <p className='font-semibold'>Nombre Completo</p>
          </div>
          <p className='pl-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!</p>
        </div>
      </footer>
    </article>
  )
}

export default PostItem;
