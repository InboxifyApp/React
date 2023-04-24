import * as React from 'react'
import axios from 'axios'




const useGetDatas = (token : any) =>{

    const [datas, setDatas] : any = React.useState()
    const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/me/b`;
    const header :string = import.meta.env.VITE_API
    const getDatas = async () =>{
        await axios.post(
            target,
            {},
            {
                headers : {
                    'Authorization' : `Bearer ${token}`, 
                    'api_key' : header
                }
            } 
        ).then((rs : any)=> {if(rs) setDatas({
            status : rs.status , 
            datas : rs.data
        })}).catch((e:any) =>{if (e) setDatas(e.response)})
    }



    return {

        datas , setDatas, getDatas
    } 
}

export default useGetDatas