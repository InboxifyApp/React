import axios from 'axios';
import * as React from 'react'



const useToken =  (token : any) =>{
    const [resp, setResponse] = React.useState({})
    const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/me/auth`;
    const header :string = import.meta.env.VITE_API
        const checkT = async () =>{
            await axios.post(
                target,
                {},
                {
                    headers : {
                        'Authorization' : `Bearer ${token}`, 
                        'api_key' : header
                    }
                } 
            ).then((rs : any)=> {if(rs) setResponse({
                status : rs.status, 
                datas : rs.datas
            })}).catch((e:any) =>{if (e) setResponse({
                status : e.response.status
            })})
        }


    return {resp, checkT}
}

export default useToken