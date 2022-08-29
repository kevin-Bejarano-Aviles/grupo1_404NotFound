import swa from 'sweetalert2'
import { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SetInput from "../components/setInput";
import avatar from "../img/avatar-default.png";
import pencil from "../img/el_pencil-alt.svg";
// import Swal from 'sweetalert2';


function ProfilePage(){
    let stylesInput = "mt-2 mb-2 pl-2 border-2 rounded-full text-slate-600 font-normal focus:outline-none focus:border-yellow-500 focus:ring-yellow-500";
    let stylesLabel="flex flex-col justify-center w-3/4 text-white font-medium "
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

    const [AdvFullname,setAdvName] = useState(userData.fullName);
    const [Advemail,setAdvEmail] = useState(userData.email);
    const [Advuser,setAdvUser] = useState(userData.user);
    const [Advpassword,setAdvPassword] = useState("");
    const [Advrepitpassword,setAdvRepitpassword] = useState("");

    const update =(ev)=>{
        ev.preventDefault()
        /**Testing the sweet alert library, ask if it is valid to use it.*/
        // Swal.fire({icon:'warning',
        //            title:'¿Está seguro de que quiere realizar los cambios?',
        //            showDenyButton: true,
        //             confirmButtonText: 'Ok',
        //             denyButtonText: 'Cancelar'
        //         })
        // .then((result) =>{
        //     /**Here the code of the request is written if the answer is yes */
        //     if (result.isConfirmed) {
        //         Swal.fire('Tus cambios han sido guardados con exito', '', 'success')
        //         }
        //     }
        // )
                   
    }

    return(
        
        <>
        <Header/>
 
            <div className="w-full mt-24 mb-24 flex flex-col justify-center items-center	">
            <h1 className="flex justify-center items-center mt-5 mb-5 text-3xl bol">Mi perfil</h1>
            <form  className=" bg-pastelred h-98 w-72 mr-auto ml-auto  rounded-3xl" onSubmit={update}>
                <div className="w-full  mt-20 flex justify-center items-center ">
                    <img className='w-20 absolute rounded-full z-0' src={avatar} alt='Avatar' />
                    <label htmlFor="file" className='flex items-center gap-2'>
                        <img className="cursor-pointer ml-2 mt-10 absolute z-10" src={pencil} />
                    </label>
                    <input type="file" name='avatar' id='file' className='hidden' accept='image/*' />
                </div>
                <div className="w-full flex flex-col justify-center mt-20 ml-5">
                    <SetInput Title="Nombre completo" Name="name" Type="text" id="name" value={Fullname} styleInput={stylesInput} styleLabel={stylesLabel} onChange={ev=> setName(ev.target.value)}/>
                    <SetInput Title="Usuario" Name="user" Type="text" id="user" value={user}  styleInput={stylesInput} styleLabel={stylesLabel} onChange={ev=> setUser(ev.target.value)}/>
                    <SetInput Title="Correo electrónico" Name="email" Type="email" id="user" value={email} styleInput={stylesInput} styleLabel={stylesLabel} onChange={ev=> setEmail(ev.target.value)}/>
                    <SetInput Title="Contraseña Nueva" Name="newpass" Type="password" id="user" value={password} styleInput={stylesInput} styleLabel={stylesLabel} onChange={ev=> setPassword(ev.target.value)}/>
                </div>
                {/**Testing the sweet alert library, ask if it is valid to use it.*/}
                <button type="submit" className="bg-yellow-400 mt-5 mb-5 ml-auto mr-auto rounded pl-2 pr-2 text-white font-medium flex  hover:bg-yellow-300 active:bg-yellow-300 focus:outline-none focus:ring focus:ring-violet-300 ">Guardar datos</button>
                
            </form>
        </div> 
        <Layout section=''/>
        </>
        
    )
}

export default ProfilePage

