import avatar from '../img/avatar-default.png';
import iconImage from '../img/icon-add-image.svg';

function NewState() {
  return (
    <article className='flex flex-col px-6 bg-white rounded-2xl shadow-xl'>
      <form>
        <div className='flex items-center gap-4 py-5 border-b-2'>
          <img className='w-10 rounded-full self-start' src={avatar} alt="Avatar" />
          <textarea
            name=''
            rows='4'
            placeholder='¿Qué está pasando?'
            className='w-full py-3 px-5 bg-pastelgray rounded-xl overflow-hidden resize-none'
          >
          </textarea>
        </div>
        <div className='flex justify-around py-5'>
          <label htmlFor="file" className='flex items-center gap-2'>
            <img src={iconImage} alt="Add image" />
            Agregar mascota
          </label>
          <input type="file" id='file' className='hidden' accept='image/*' />
          <button className='py-2 px-7 text-white font-bold bg-pastelred rounded-full'>Publicar</button>
        </div>
      </form>
    </article>
  )
}

export default NewState;