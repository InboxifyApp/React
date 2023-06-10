import * as React from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
const useCluster = ()=>{
    const [name, setName] = React.useState("")
    const [domain, setDomain] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [color, setColor] : any = React.useState("#962134")

    const [clusters, setClusters] : any = React.useState([])
    const target: string = `http://${import.meta.env.VITE_TARGET_BACKEND}:3001/cluster/`
    const header :string = import.meta.env.VITE_API



    const Save = async () =>{
        const reqBdy = {
            name : name, 
            domain : domain,
            description : description,
            color : color
        }


        axios.post(target, reqBdy, {
            headers: {
                'api_key': header,
                'authorization': "Bearer " + localStorage.getItem("token")
            }
                }).then(res => {

                    if(res.status === 200){
                        toast.success("Cluster created")

                    }else{
                        toast.error("Error")
                    }
                    console.log(res)
                    
                }).catch(error => {
                    toast.error("Internal Error")


                    console.log((error))
                })

    }



    const GetAll = async () =>{
        axios.get(
            target, 
            {
                headers : {  
                'api_key' : header,
                "authorization" : "Bearer" + localStorage.getItem("token")

            }
        }
        ).then(res=>{
            console.log(",",res)
            setClusters(res.data)
        }).catch(e=>{
            console.log(e)
        })
    }

    return {
        name,
        setName,
        domain,
        setDomain,
        description,
        setDescription,
        color,
        setColor, 
        Save, 
        GetAll,
        clusters
        

    }
}


export default useCluster