import * as React from 'react'
import { Link , Outlet } from 'react-router-dom';
function Layout(){
    return(
    <div>
        <nav>
            <Link to={'home'}>Boton 1</Link>
            <Link to={'profile'}>Boton 2</Link>
        </nav>
        <section>
            <Outlet/>
        </section>
    </div>
    )
}

export default Layout;