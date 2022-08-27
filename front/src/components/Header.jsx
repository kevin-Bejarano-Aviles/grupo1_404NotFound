import logo from '../img/logo.png';

function Header() {
  return (
    <header className='fixed z-30 top-0 left-0 flex justify-between items-center px-10 w-full h-20 shadow-md bg-white'>
      <img className='w-10' src={logo} alt='Logo' />
      <div className='flex items-center gap-4'>
        <p className='select-none'>
          <span className='font-semibold'>Nombre</span> Apellido
        </p>
        <img className='w-10 rounded-full' src='https://www.nbcconstruction.co.uk/wp-content/uploads/2017/12/avatar-default.jpg' alt='Avatar' />
      </div>
    </header>
  )
}

export default Header;