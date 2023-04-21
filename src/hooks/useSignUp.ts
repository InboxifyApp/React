import * as React from 'react'
import axios from 'axios'

const useSignUp = () =>{

    //datas : 
    const [username, setUser] = React.useState(String) 
    const [password, setPass] = React.useState(String)
    const [email, setEmail] = React.useState(String)
    const [phone, setPhone] = React.useState(String)
    const [name, setName] = React.useState(String)
    const [date, setDate] = React.useState(Date)
    React.useEffect(()=>{

    }, [])



    const CreateUser = async () =>{
        const reqBody : any = {
            username : username,
            password : password , 
            email : email,
            phone : phone,
            fullname : name,
            bday : date, 


        }
        console.log(import.meta.env)
        const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/me`;
        const header :string = import.meta.env.VITE_API
        console.log(target)
        await axios.post(target,reqBody, {
            headers : {
                api_key : header, 
                tst : "hello"
            },
        } ).then((res : any) =>{
            console.log(res)
        }).catch((e: any) =>{
            console.log(e)

        })
    }
    return {
        username,
        password, 
        email,
        phone,
        name,
        date,
        setUser,
        setPass,
        setEmail,
        setPhone,
        setName,
        setDate, 
        CreateUser

    }
}

export default useSignUp