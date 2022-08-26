import React from 'react';
import '../App.css';
import Input from '../components/Input';
import IconLogIn from '../components/IconLogIn';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    
    <div className="h-screen  w-full bg-pastelpink bg-clip-border overflow-x-hidden">

        <div className="w-full h-24">

        </div>

         <a tittle='' href='http://localhost:3000/'><IconLogIn/></a>

            <div className="bg-pastelred h-98  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl"> {/* pricipal box */}
           
             <form action=''>

                <label htmlFor='name-register' className='relative top-8 left-5 font-semibold text-sm text-white'>Nombre completo</label>
                <Input Tipo="nombre" Name="name" Id='name-register' />

                <label htmlFor='email-register' className='relative top-8 left-5 font-semibold text-sm text-white'>Email</label>
                <Input Tipo="email" Name="email" Id='email-register'/>

                <label htmlFor='user-register' className='relative top-8 left-5 font-semibold text-sm text-white'>Usuario</label>
                <Input Tipo="user" Name="user" Id='user-register' />

                <label htmlFor='pass-register' className='relative top-8 left-5 font-semibold text-sm text-white'>Contraseña</label>
                <Input Tipo="pass" Name="pass" Id='pass-register'/>

                <label htmlFor='pass2-register' className='relative top-8 left-5 font-semibold text-sm text-white'>Repetir contraseña</label>
                <Input Type="repita la contraseña" Name="pass2" Id='pass2-register'/>

                <div className='mr-auto ml-auto w-36 mt-12'>
                <button className="h-9 w-32 text-pastelgray font-semibold text-sm bg-pastelyellow rounded-3xl shadow outline-none focus:outline-none focus:ring focus:ring-pastelpink pl-1 relative bottom-5 left-3 " Type="submit" value= "Registrate">Registrate</button>
                </div>

             </form>
        </div>

        <div className=" flex flex-row items-center  w-72 ml-auto mr-auto text-sm font-semibold relative bottom-5">
            <h4 className=" text-gray-400 ml-2">Ya tienes una cuenta?</h4>
            <Link to={"/login"} className='w-32 h-9 bg-pastelred text-pastelgray rounded-3xl ml-4 flex items-center justify-center'>Inicia Sesión</Link>
        </div>
</div>

  )
};
export default SignUpPage;