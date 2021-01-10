import React from 'react'
import logo from "./logo1.svg"
import {useStore} from "./store/Store"
function Login() {
    const {login, user,} = useStore()
      async function handleClick(){
        try{
          
          await login()
        
        }catch{}
    }
    return (
        <div className="h-screen px-10 py-20">
            <div className="flex flex-col flex-wrap bg-green-500 py-12 shadow-xl rounded-xl h-80">
            <img className="mx-0 w-1/5" src={logo}/>
                <div className="bg-green-800 text-center text-white shadow-xl rounded-xl w-2/3 h-56"><h2 className="font-sans mx-auto w-2/3 font-bold ">Login With Google</h2><button onClick={handleClick} className="border rounded-md mt-10 w-2/3 p-5 font-bold">L O G I N</button></div>
            </div>
        </div>
    )
}

export default Login
