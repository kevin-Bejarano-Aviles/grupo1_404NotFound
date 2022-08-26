import React from 'react'
import Input from '../components/Input';
import IconLogIn from '../components/IconLogIn';
import { Link } from 'react-router-dom';
import '../App.css';
function LogIn() {
  return (
    <div className="h-screen  w-full bg-pastelpink bg-clip-border overflow-x-hidden"> {/* pricipal box */}
        <div className="w-full h-32"> </div>
         <IconLogIn/> {/* component icon */}
        <div className="bg-rose-400 h-96  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl">   {/* login form container box */}
           <form action="">
           <div className='relative top-8'>  {/* input container box */}
            <label htmlFor='name' className='relative top-8 left-5 font-mono font-bold text-sm text-white'>Nombre:</label> {/* title name  */}
            <Input 
             Type="usuario"
             Name="loguser"
             Id="name"
            />
            <label htmlFor='password' className='relative top-8 left-5 font-mono font-bold text-sm text-white'>Contraseña:</label> {/* title password  */}
            <Input 
             Type="password"
             Name="logpass"
             Id="password"
            />
            <div /* className="w-8 bg-red-600" */>
            <Input 
             Type="submit"
             value= "Inicia Sesión"
            />
            </div>
            </div>
            </form>
        </div>
        <div className=" flex flex-row items-center  w-72 ml-auto mr-auto"> {/* question and button container box */}
            <h4 className="font-mono font-bold text-sm text-gray-500 ml-2 w-56">¿No tienes una cuenta?</h4> {/* question */}
            <Link to={"/sign-up"} className='w-28 h-8 bg-red-500 rounded-xl ml-4 flex items-center justify-center text-white'>Registrate</Link> {/* button */}
        </div>
    </div>
  )
};
export default  LogIn;
