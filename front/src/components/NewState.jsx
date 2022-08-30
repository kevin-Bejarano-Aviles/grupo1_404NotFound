import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import iconImage from '../img/icon-add-image.svg';

function NewState() {
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const URI = 'http://localhost:8000/posts';

  const [content, setContent] = useState('');
  const [postImg, setPostImg] = useState('');

  useEffect(() =>{
    createPost();
  },[]);

  const createPost = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      content: content,
      postImg: postImg
    }).then(result => {
      console.log(result.data)
    }
    ).catch(error => console.log(error))
    navigate('/home');
  }

  const [cansendPost, setCansendPost] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleNewStateInput = e => {
    if (e.target.value) {
      setCansendPost(true);
      setErrorState(false);
    } else {
      setCansendPost(false);
      setErrorState(true);
    }
  };

  return (
    <article className='flex flex-col px-6 bg-white rounded-2xl shadow-xl'>
      <form onSubmit={createPost}>
        <div className='flex items-center flex-wrap gap-4 py-5 border-b-2'>
          <img className='w-10 rounded-full self-start' src={require(`../img/users/${user.avatar}`)} alt='Avatar' />
          <textarea
            id='new-state-input'
            name='content'
            rows='4'
            placeholder='¿Qué está pasando?'
            className='w-full py-3 px-5 bg-pastelgray rounded-xl overflow-hidden resize-none outline-0'
            onChange={e => handleNewStateInput(e)}
          >
          </textarea>
          <p className={`w-10/12 text-red-500 ${errorState ? 'block' : 'hidden'}`}>
            * La publicación debe contener una descripción.
          </p>
        </div>
        <div className='flex justify-around items-center py-5'>
          <label htmlFor='file' className='flex items-center gap-2 py-3 px-4 rounded-full cursor-pointer hover:bg-pastelgray'>
            <img src={iconImage} alt='Add image' />
            Agregar mascota
          </label>
          <input type='file' id='file' name= 'postImg' className='hidden' accept='image/*' />
          <button
            type='submit'
            className={`${cansendPost ? 'bg-pastelred hover:bg-hoverpastelred' : 'bg-gray-300'} py-2 px-7 text-white font-bold rounded-md`}
            disabled={cansendPost ? false : true}
          >
            Publicar
          </button>
        </div>
      </form>
    </article>
  )
}

export default NewState;