import * as React from 'react';
import plus from '../img/plus_icon_brown.svg';
import home from '../img/home_icon_brown.svg';
import user from '../img/user_icon_brown.svg';
import { Link  } from 'react-router-dom';
function Layout(){
    return(
    <>
        <nav className='fixed z-30 h-20 w-full flex justify-around items-center bg-pastelpink  bottom-0 right-0 left-0'>
            <Link to={'/home'}><img className='w-15' src={home} alt='user'/></Link>
            <div className=''>
                <img className='w-20 h-20 ' src={plus} alt='user'/>
            </div>
            <Link to={'/profile'}><img className='w-17 h-17' src={user} alt='home'/></Link>
        </nav>
    </>
    )
}
export default Layout;