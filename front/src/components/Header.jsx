import logo from '../img/logo.png';
import avatar from '../img/avatar-default.png'

function Header() {

  const api = [
    {
      id: 1,
      name: 'Nombre',
      surname: 'Apellido',
      urlImage: avatar
    }
  ];

  return (
    <header className='fixed z-10 top-0 left-0 flex justify-between items-center px-10 w-full h-20 shadow-md bg-white'>
      <img className='w-10' src={logo} alt='Logo' />
      <div className='flex items-center gap-4'>
        <p>
          <span className='font-semibold'>{api[0].name}</span> {api[0].surname}
        </p>
        <img className='w-10 rounded-full' src={api[0].urlImage} alt='Avatar' />
      </div>
    </header>
  )
}

export default Header;