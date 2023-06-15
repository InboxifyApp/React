import axios from 'axios'
import * as React from 'react'
import {toast} from 'react-hot-toast'


const useSender = () =>{
    const [datas, setDatas] : any = React.useState()
    const header :string = import.meta.env.VITE_API
    const Fetch = async (id : any) =>{
        const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/cluster/by?id=${id}`
        axios.get(target,
            {
                headers: {
                    "api_key" : header
            }
        }
            ).then(res=>{
            console.log(res)
            if (res.data)setDatas(res.data)
        }).catch(e=>{
            console.log(e)
            setDatas("shit")
        })
        
    }
    
    

    const [name, setName] = React.useState("")
    const [email, setEmail] =React.useState("")
    const [phone, setPhone ] = React.useState("")
    const [message ,setMessage]= React.useState("")
    const [subject, setSubject] = React.useState("")
    const Send = async (id : any) =>{
        
        const reqBody : any = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            subject: subject,
            cluster : id

        }

        const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/cluster/`

        return await axios.post(target,reqBody, {
            headers:{
                apikey : 123
            }
        })
        
    }
    return {
        datas, Fetch,

        name, setName, 
        email, setEmail, 
        phone, setPhone, 
        message, setMessage, 
        subject, setSubject,
        Send
    }
}

export default useSender