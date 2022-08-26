import { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SetInput from "../components/setInput";
import avatar from "../img/avatar-default.png";
import pencil from "../img/el_pencil-alt.svg";


function ProfilePage(){

    //testing 
    const userData = {
        fullName:"Juan",
        user:"Juan123",
        email:"123juan@gmail.com",
        password:"123456",
        new_passsword:"holis"
    }

    //According to the example code, the process to change the data of the object is done from the backend,
    //ask just in case
    
    const [Fullname,setName] = useState(userData.fullName);
    const [email,setEmail] = useState(userData.email);
    const [user,setUser] = useState(userData.user);
    const [password,setPassword] = useState("");
    const [repitpassword,setRepitpassword] = useState("");

    const update =(ev)=>{
        ev.preventDefault()
        alert("se esta mandano el formulario")
    }

    return(
        
        <>
        <Header/>
            <div className="m-20">
            <h1>mi perfil</h1>
            <form onSubmit={update}>
                <div className="w-full h-5 m-10 flex justify-center">
                    <img className='w-20 absolute rounded-full z-0' src={avatar} alt='Avatar' />
                    <label htmlFor="file" className='flex items-center gap-2'>
                        <img className="cursor-pointer ml-2 mt-16 absolute z-10" src={pencil} />
                    </label>
                    <input type="file" id='file' className='hidden' accept='image/*' />
                </div>
                <div className="w-full flex flex-col justify-center mt-20">
                    <SetInput Title="Nombre completo" Name="fullname" Type="text" id="name" value={Fullname} styleInput="flex justify-center" styleLabel="flex flex-col justify-center" onChange={ev=> setName(ev.target.value)}/>
                    <SetInput Title="Usuario" Name="user" Type="text" id="user" value={user} styleInput="" styleLabel="flex flex-col justify-center" onChange={ev=> setUser(ev.target.value)}/>
                    <SetInput Title="Correo electrónico" Name="email" Type="email" id="user" value={email} styleInput="" styleLabel="flex flex-col justify-center" onChange={ev=> setEmail(ev.target.value)}/>
                    <SetInput Title="Contraseña Nueva" Name="password" Type="password" id="user" value={password} styleInput="" styleLabel="flex flex-col justify-center" onChange={ev=> setPassword(ev.target.value)}/>
                    <SetInput Title="Repetir Contraseña" Name="repitPasword" Type="text" id="password" value={repitpassword} styleInput="" styleLabel="flex flex-col justify-center" onChange={ev=> setRepitpassword(ev.target.value)}/>
                </div>
                <button type="submit" className="bg-violet-500 rounded pl-2 pr-2 text-white mt-5 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">Guardar datos</button>

            </form>
        </div> 
        <Layout/>
        </>
        
    )
}

export default ProfilePage

