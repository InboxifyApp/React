import * as React from 'react'
import * as Components from './../components/components'
import * as ChackraUI from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useSender from '../hooks/useSender'
import { Toaster, toast } from 'react-hot-toast'
const Send = () =>{
    const {
        datas, Fetch,

        name, setName, 
        email, setEmail, 
        phone, setPhone, 
        message, setMessage, 
        subject, setSubject,
        Send
    } = useSender()
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
                            <ChackraUI.FormControl className="flex-col flex items-center justify-center gap-4" onSubmit={(e)=>{
                                
                                e.preventDefault();
                                Send(params.id).then(res=>{
                                    toast.success("Done Sending the Message")
                                })
                                .catch(e=>{
                                    toast.error("Error Sending the Message")
                                })
                            }}>
                            <Components.Input Class="w-2/5" Placeholder="Full Name" value={name}
                                onChange={(e:any)=>{setName(e.target.value)}}
                            />
                            <Components.Input Class="w-2/5" Placeholder="Email" value={email} 
                                onChange={(e:any)=>{setEmail(e.target.value)}}
                            />
                            <Components.Input Class="w-2/5" type="number" Placeholder="Phone" 
                            value={phone}
                                onChange={(e:any)=>{setPhone(e.target.value)}}
                            />
                            <Components.Input Class="w-2/5" Placeholder="Subject" value={subject}
                                onChange={(e:any) =>{
                                    setSubject(e.target.value)
                                }}
                            />
                            
                            <textarea  
                                value={message}
                                onChange={(e:any)=>{
                                    setMessage(e.target.value)
                                }
                            
                            }
                            rows={10} className='outline-0 p-2 rounded bg-[#313131] w-2/5 text-white border border-[#666666] shadow-5xl text-sm' placeholder='Your Message'></textarea>
                            
                            <button className='text-white bg-purple px-14 py-3 rounded shadow-5xl text-sm' type='submit'>
                                Send Your Message
                            </button>
                        </ChackraUI.FormControl>
                    </div>

                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                    
                </div>
            )
        
    
    
}


export default Send