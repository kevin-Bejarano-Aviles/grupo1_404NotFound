import React from 'react'
import '../App.css'

function Input({Name, Tipo, Placeholder, Valor}) {
    return (
        <>
        <div className="">
          <form className="" action="">
            <div className='mr-auto ml-auto  w-64 mt-10'>
            <input type={Tipo} name={Name}  placeholder={Placeholder} value={Valor} className="h-10 w-64 placeholder-slate-300 text-black relative bg-white rounded-3xl text-sm border-1 shadow outline-none focus:outline-none focus:ring focus:ring-red-500 w-50 pl-10 "/>
          </div>
          </form>
        </div>
        </>
      )
}
export default  Input;

/* {`${Tipo}:mr-5 ${Tipo}:border-green-500`} */