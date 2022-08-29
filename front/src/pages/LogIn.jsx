import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import IconLogIn from '../components/IconLogIn';
import { Link } from 'react-router-dom';
import '../App.css';

function LogIn() {
  const navigate = useNavigate();

  const URI = 'http://localhost:8000/users/login';

  const [logUser, setLogUser] = useState('');
  const [logPass, setLogPass] = useState('');

  useEffect(() =>{
    login();
  },[]);

  const login = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      logUser: logUser,
      logPass: logPass
    }).then(result => console.log(result)).catch(error => console.log(error))
    navigate('/home');
  };

  return (
    <div className="h-screen  w-full bg-pastelpink bg-clip-border overflow-x-hidden font-semibold text-sm"> {/* pricipal box */}
        <div className="w-full h-32"> </div>
         <a title='' href='http://localhost:3000/'><IconLogIn/></a> {/* component icon */}
        <div className="bg-rose-400 h-80  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl">   {/* login form container box */}
          <form action="" onSubmit={login}>
           <div className='relative top-10 mr-auto ml-auto  w-64 mt-10'>  {/* input container box */}
            <label htmlFor='name' className='relative top left-5 text-pastelgray'>Nombre</label> {/* title name  */}
            <input
              className="h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5 "
              type="usuario"
              name="logUser"
              value={logUser}
              onChange={e => setLogUser(e.target.value)}
              id="name"
            />
            <label htmlFor='password' className='relative top left-5 text-pastelgray'>Contraseña</label> {/* title password  */}
            <input
              className="h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5 "
              type="password"
              name="logPass"
              id="password"
              value={logPass}
              onChange={e => setLogPass(e.target.value)}
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
