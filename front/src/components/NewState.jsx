import avatar from '../img/avatar-default.png';
import iconImage from '../img/icon-add-image.svg';

function NewState() {
  return (
    <article className='flex flex-col px-6 bg-white rounded-2xl shadow-xl'>
      <div className='flex items-center gap-4 py-5 border-b-2'>
        <img className='w-10 rounded-full' src={avatar} alt="Avatar" />
        <div className='w-full py-3 px-5 bg-pastelgray rounded-3xl overflow-auto' contentEditable type="text">¿Qué está pasando?</div>
      </div>
      <div className='flex justify-around py-5'>
        <div className='flex items-center gap-2'>
          <img src={iconImage} alt="" />
          <p>Agregar mascota</p>
        </div>
        <button className='py-2 px-7 text-white font-bold bg-pastelred rounded-full'>Subir</button>
      </div>
    </article>
  )
}

export default NewState;