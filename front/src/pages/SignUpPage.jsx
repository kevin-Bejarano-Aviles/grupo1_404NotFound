import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
//import input from '../components/input';
import IconLogIn from '../components/IconLogIn';
import { Link } from 'react-router-dom';

function SignUpPage() {
  
  const URI = 'http://localhost:8000/users/register';
  const navigate = useNavigate();

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [user, setUser] = useState([]);
  const [pass, setPass] = useState([]);
  const [pass2, setPass2] = useState([]);

  // const [cansendLogin, setCansendLogin] = useState(false);
  // const [errorState, setErrorState] = useState(false);


  // const handleNewStateInput = e => {
  //   if (e.target.value) {
  //     setCansendLogin(true);
  //     setErrorState(false);
  //   } else {
  //     setCansendLogin(false);
  //     setErrorState(true);
  //   }
  // };

  useEffect(() => {
    createUser();
  },[]);

  const createUser = async (e) => {
    e.preventDefault();
    
    await axios.post(URI, {
      name: name,
      email: email,
      user: user,
      pass: pass,
      pass2: pass2
    });
    navigate('/login');
  };

  return (

    <div className="h-screen  w-full bg-pastelpink bg-clip-border overflow-x-hidden">

        <div className="w-full h-24">

        </div>

        <a tittle='' href='http://localhost:3000/'><IconLogIn/></a>

            <div className="bg-pastelred h-98  w-72 mr-auto ml-auto relative bottom-10 rounded-3xl"> {/* pricipal box */}

              <form action='' onSubmit={createUser} className='p-4'>

                <label htmlFor='name-register' className='font-semibold text-sm text-white'>Nombre completo</label>
                <input
                  className='h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5'
                  type="nombre"
                  id='name-register'
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                  <p></p>
                <label htmlFor='email-register' className='text-pastelgray font-semibold text-sm text-white'>Email</label>
                <input
                  className='h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5'
                  type="email"
                  Id='email-register'
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor='user-register' className='text-pastelgray font-semibold text-sm text-white'>Usuario</label>
                <input
                  className='h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5'
                  type="user"
                  id='user-register'
                  name="user"
                  value={user}
                  onChange={e => setUser(e.target.value)}
                />

                <label htmlFor='pass-register' className='text-pastelgray font-semibold text-sm text-white'>Contraseña</label>
                <input
                  className='h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5'
                  type="password"
                  id='pass-register'
                  name="pass"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                />

                <label htmlFor='pass2-register' className='text-pastelgray font-semibold text-sm text-white'>Repetir contraseña</label>
                <input
                  className='h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm shadow outline-none pl-5'
                  type="password"
                  name="pass2"
                  id='pass2-register'
                  value={pass2}
                  onChange={e => setPass2(e.target.value)}
                />

                <div className='mr-auto ml-auto w-36 mt-12'>
                <button
                  className="h-9 w-32 text-pastelgray font-semibold text-sm bg-pastelyellow rounded-3xl shadow outline-none focus:outline-none focus:ring focus:ring-pastelpink pl-1 relative bottom-5 left-3 "
                  type="submit"
                  value= "Registrate"
                  >
                    Registrate
                  </button>
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