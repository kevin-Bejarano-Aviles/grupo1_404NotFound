import { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import avatar from "../img/avatar-default.png";
import pencil from "../img/el_pencil-alt.svg"


function ProfilePage(){
    const [nombre,Setnombre] = useState('user')

    return(
        <>
        <Header/>
            <div className="m-20">
            <h1>mi perfil</h1>
            <div className="flex justify-center">
                <img className='w-10 rounded-full' src={avatar} alt='Avatar' />
                <label for="avatarImg">
                    <img src={pencil}/>
                </label>
                <input type="file" name="imgAvatar" id="avatarImg"/>
            </div>

            <div className='flex items-center gap-4 py-5 border-b-2'>
                <div className='w-full py-3 px-5 bg-pastelgray rounded-3xl overflow-auto' contentEditable type="text">{nombre}</div>
            </div>
        </div> 
        <Layout/>
        </>
        
    )
}

export default ProfilePage

