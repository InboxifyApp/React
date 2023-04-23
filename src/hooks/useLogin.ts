import  * as React from 'react'
import axios from 'axios'


const useLogin  = () =>{
    
    const [username, setUser] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    
    const makeAuth  = async ()=>{
        const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/me/login`;
        const header :string = import.meta.env.VITE_API

        const reqBody : any = {
            username : username,
            password : password ,
        }   
        const res = await axios.post(target, reqBody, {
            headers : {
                'api_key' : header
            }
        }).then(rs => rs).catch(e => e.response)

        return res

    }


    return {
        username,
        setUser,
        password,
        setPassword,
        makeAuth

        

    }
}


export default useLogin