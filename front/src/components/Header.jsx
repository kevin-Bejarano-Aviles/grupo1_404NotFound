import logo from '../img/logo.png';
import avatar from '../img/avatar-default.png'

function Header() {
  return (
    <header className='flex justify-between items-center px-10 h-20 shadow-md'>
      <img className='w-10' src={logo} alt='Logo' />
      <div className='flex items-center gap-4'>
        <p>
          <span className='font-semibold'>Nombre</span> Apellido
        </p>
        <img className='w-10 rounded-full' src={avatar} alt='Avatar' />
      </div>
    </header>
  )
}

export default Header;