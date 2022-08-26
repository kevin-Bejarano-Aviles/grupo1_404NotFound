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

         <IconLogIn/>

            <div className="bg-pastelred h-98  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl"> {/* pricipal box */}
           
             <div>
                <h3 className='relative top-8 left-5 font-semibold text-sm text-white'>Nombre completo</h3>
                <Input Tipo="nombre" Name="name" />

                <h3 className='relative top-8 left-5 font-semibold text-sm text-white'>Email</h3>
                <Input Tipo="email" Name="email"/>

                <h3 className='relative top-8 left-5 font-semibold text-sm text-white'>Usuario</h3>
                <Input Tipo="user" Name="user" />

                <h3 className='relative top-8 left-5 font-semibold text-sm text-white'>Contraseña</h3>
                <Input Tipo="pass" Name="pass"/>

                <h3 className='relative top-8 left-5 font-semibold text-sm text-white'>Repetir contraseña</h3>
                <Input Tipo="repita la contraseña" Name="pass2"/>

                <Input Tipo="submit" Valor= "Registrate"/>

             </div>
        </div>

        <div className=" flex flex-row items-center  w-72 ml-auto mr-auto text-sm font-semibold relative bottom-5">
            <h4 className=" text-gray-400 ml-2">Ya tienes una cuenta?</h4>
            <Link to={"/login"} className='w-32 h-9 bg-pastelred text-pastelgray rounded-3xl ml-4 flex items-center justify-center'>Inicia Sesión</Link>
        </div>
</div>

  )
};
export default SignUpPage;