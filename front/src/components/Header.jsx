import logo from '../img/logo.png';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <header className='fixed z-30 top-0 left-0 flex justify-between items-center px-10 w-full h-20 shadow-md bg-white'>
      <img className='w-10' src={logo} alt='Logo' />
      <div className='flex items-center gap-4'>
        <p className='select-none'>
          <span>{user.user}</span>
        </p>
        <img className='w-10 rounded-full' src={require(`../img/users/${user.avatar}`)} />
      </div>
    </header>
  )
}

export default Header;