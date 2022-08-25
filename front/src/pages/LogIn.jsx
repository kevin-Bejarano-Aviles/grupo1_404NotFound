import React from 'react'
import Input from '../components/Input';
import IconLogIn from '../components/IconLogIn';
import DogRigth from '../img/TheLittleThings-DogRigth.png';
import DogLeft from '../img/TheLittleThings-DogLeft.png';
import { Link } from 'react-router-dom';
import '../App.css';
function LogIn() {
  return (
    <div className="h-screen  w-full bg-blue-300 bg-clip-border overflow-x-hidden">
        <div className="w-full h-36">
            <div className=" flex flex-row w-72 ml-auto mr-auto justify-center relative top-10">
        <img src={DogLeft} alt="" className="h-20 w-32 mr-11" />
         <img src={DogRigth} alt="" className="h-20 w-32 ml-11" />
           </div>
        </div>
         <IconLogIn/>
        <div className="bg-rose-400 h-96  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl"> {/* pricipal box */}
           
           <div>
            <h3 className='relative top-8 left-5 font-mono font-bold text-sm text-white'>Nombre:</h3>
            <Input 
             Tipo="usuario"
             Name="loguser"
            />
            <h3 className='relative top-8 left-5 font-mono font-bold text-sm text-white'>Contraseña:</h3>
            <Input 
             Tipo="logpass"
             Name="logpass"
            />
            <div /* className="w-8 bg-red-600" */>
            <Input 
             Tipo="submit"
             Valor= "Inicia Sesión"
            />
            </div>
            </div>
        </div>
        <div className="bg-yellow-500 flex flex-row items-center  w-72 ml-auto mr-auto">
            <h4 className="font-mono font-bold text-sm text-white ml-2">¿No tienes una cuenta?</h4>
            <Link to={"/sign-up"} className='w-28 h-8 bg-red-500 rounded-xl ml-4'>Registrate</Link>
        </div>
    </div>
  )
};
export default  LogIn;
