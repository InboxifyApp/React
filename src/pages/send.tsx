import * as React from 'react'
import * as Components from './../components/components'
import * as ChackraUI from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useSender from '../hooks/useSender'
const Send = () =>{
    const {Fetch, datas} = useSender()
    const params = useParams()
    console.log(params.id)

    React.useEffect(()=>{
        Fetch(params.id)
    }, [])

    //console.log("datas", datas)
    //delay 1 second 

    //set timeout 
            if (datas === "shit") {
                return (
                    <div className="w-full h-screen bg-dark flex items-center justify-center">
                        <p className='text-white font-bold text-3xl'>Cluster with ID={params.id} doesn't exist ! </p>

                    </div>
                )
            }
            return (
                <div className="w-full h-screen bg-dark">
                    <nav className="w-full h-auto flex">
        
                    </nav>
        
                    <div className="w-full h-auto text-center">
                        <p className='p-10 font-bold text-3xl' style={{
                            color : datas ? datas.color : "#fff"
                        }}>Contact {datas ? datas.name : "Loading"}</p>
                            <ChackraUI.FormControl className="flex-col flex items-center justify-center gap-4">
                            <Components.Input Class="w-2/5" Placeholder="Full Name" />
                            <Components.Input Class="w-2/5" Placeholder="Email" />
                            <Components.Input Class="w-2/5" Placeholder="Phone" />
                            <Components.Input Class="w-2/5" Placeholder="Subject" />
                            
                            <textarea rows={"10"} className='outline-0 p-2 rounded bg-[#313131] w-2/5 text-white border border-[#666666] shadow-5xl text-sm' placeholder='Your Message'></textarea>
                            
                            <button className='text-white bg-purple px-14 py-3 rounded shadow-5xl text-sm'>
                                Send Your Message
                            </button>
                        </ChackraUI.FormControl>
                    </div>
                </div>
            )
        
    
    
}


export default Send