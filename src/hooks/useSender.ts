import axios from 'axios'
import * as React from 'react'



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
    return {
        datas, Fetch
    }


    const Send = async () =>{


        
    }
}

export default useSender