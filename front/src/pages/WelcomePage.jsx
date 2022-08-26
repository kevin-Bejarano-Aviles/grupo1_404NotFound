import React from 'react';
import logo from '../img/logo.png'
import Dog from '../img/dog.png';
import Cat from '../img/cat.png';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="h-screen  w-full bg-pastelpink  overflow-x-hidden">
        <div>
           <img className='w-20 mr-auto ml-auto relative top-10 ' src={logo} alt='Logo'/>
           <h1 className="mr-auto ml-auto relative left-2/4 top-8 text-slate-700 font-mono font-semibold">Buddy.</h1>
        </div>
        <div className="h-80 w-46  mt-20">
         <div className=' flex flex-row  justify-center items-center'>
         <Link to={"/sign-up" }  className=" h-12 w-40 rounded-3xl bg-pastelblue text-pastelgray ml-4 flex justify-center items-center">Registrate</Link>
         <img className="relative h-24 w-30 left-18 " src={Dog} alt="dog" />
         </div >
         <div className=' flex flex-row  justify-center items-center mt-10'>
         <img className="relative h-28 w-30 right-4 top-2" src={Cat} alt="cat" />
         <Link to={"/login"} className="h-12 w-36  rounded-3xl bg-pastelred text-pastelgray flex justify-center items-center">Inicia Sesión</Link>
         </div>
         </div>
         <div className=' w-64 ml-auto mr-auto'>
            <h5 className='relative bottom-12'>Quieres iniciar sesión o registrarte?</h5>
         </div>
    </div>
  )
}
export default  WelcomePage
