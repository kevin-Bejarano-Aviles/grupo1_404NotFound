import React from 'react'
import Input from '../components/Input';
import IconLogIn from '../components/IconLogIn';
import { Link } from 'react-router-dom';
import '../App.css';
function LogIn() {
  return (
    <div className="h-screen  w-full bg-pastelpink bg-clip-border overflow-x-hidden font-semibold text-sm"> {/* pricipal box */}
        <div className="w-full h-32"> </div>
         <IconLogIn/> {/* component icon */}
        <div className="bg-rose-400 h-80  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl">   {/* login form container box */}
           <form action="">
           <div className='relative top-8'>  {/* input container box */}
            <label htmlFor='name' className='relative top-8 left-5 text-pastelgray'>Nombre</label> {/* title name  */}
            <Input 
             Type="usuario"
             Name="loguser"
             Id="name"
            />
            <label htmlFor='password' className='relative top-8 left-5 text-pastelgray'>Contraseña</label> {/* title password  */}
            <Input 
             Type="password"
             Name="logpass"
             Id="password"
            />
            <div className='mr-auto ml-auto w-36 mt-12'>
            <button className="h-9 w-32 text-pastelgray font-semibold text-sm bg-pastelyellow rounded-3xl shadow outline-none focus:outline-none focus:ring focus:ring-pastelpink pl-1 relative bottom-5 left-3 "  Type="submit" value= "Inicia Sesión">Inicia Sesión</button>
            </div>
            </div>
            </form>
        </div>
        <div className=" flex flex-row items-center  w-72 ml-auto mr-auto relative bottom-5"> {/* question and button container box */}
            <h4 className=" text-gray-400 ml-2 w-52">No tienes una cuenta?</h4> {/* question */}
            <Link to={"/sign-up"} className='w-36 h-9 bg-pastelred text-pastelgray rounded-3xl flex items-center justify-center'>Registrate</Link> {/* button */}
        </div>
    </div>
  )
};
export default  LogIn;
