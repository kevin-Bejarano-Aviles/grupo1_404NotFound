import React from "react";
import '../App.css';
import logo from '../img/logo.png';
import dog from '../img/dog.png';
import cat from '../img/cat.png';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
  return (
    <div className="h-screen  bg-pastelpink text-sm ">

      <div>

        <img className='w-20 mr-auto ml-auto relative top-10 ' src={logo} alt='Logo'/>
        <h1 className="mr-auto ml-auto relative left-2/4 top-8 text-slate-700 font-mono font-semibold">Buddy.</h1>

      </div>


      <div className="h-44 w-46">

        <img className="relative h-36 w-30 left-96 top-14" src={dog} alt="dog" />
        <img className="relative h-36 w-30 right-4 top-14" src={cat} alt="cat" />

      </div>

      <div className="h-44 w-46 relative bottom-24">

      <Link to={"/sign-up"} className="relative left-44 h-14 w-36 rounded-3xl bg-pastelblue text-pastelgray ">Registrate</Link>
      <Link to={"/login"} className="relative top-44 left-60 h-14 w-36  rounded-3xl bg-pastelred text-pastelgray">Inicia Sesión</Link>

      </div>


     {/* <h4 className="mr-auto ml-auto relative inset-6 text-slate-500">Quieres iniciar sesión o registrarte?</h4>  */}
  
    
    </div> 
  )
};
 export default WelcomePage;