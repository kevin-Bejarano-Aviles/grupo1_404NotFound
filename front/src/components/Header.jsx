import logo from '../img/logo.png';
import avatar from '../img/avatar-default.png'

function Header() {
  return (
    <header className='fixed top-0 left-0 flex justify-between items-center px-10 w-full h-20 shadow-md bg-white'>
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