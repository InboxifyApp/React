import * as React from 'react'
import * as Cookie from 'react-cookie'
import useToken from '../hooks/useAuth'
import useGetDatas from '../hooks/getUser'
import * as SVG from './../components/svg'
import { Link } from 'react-router-dom'
import MessagesTab from '../components/all.messages.tab'
import Clusters from '../components/Clusters'
const Me = () =>{
    const [deFault, setDef] :any= React.useState(<MessagesTab/>)
    const [cookie, setCookie, removeCookie] = Cookie.useCookies()

    const {datas, getDatas} = useGetDatas(localStorage.getItem("token")) 

    React.useEffect(() => {
        getDatas()
    }, [])
    console.log("tst" , datas) 
    if(datas && datas.status != 200) {
        //remove cookie 
        localStorage.removeItem("token")
        window.location.href = "/signin"
    }

    console.log(datas)
    
    
        return (
        <div className='w-ull h-screen bg-dark flex items-center justify-center'>
            <aside className='w-1/4 h-full bg-purple flex items-center justify-between flex-col'>
                <div className='w-full flex items-center '>
                    <SVG.Logo  Width="100" />
                    <p className='text-white text-bold font-bold pt-4'>{
                    datas ? datas.datas.fullname : ""
                    }</p>
                </div>  
                <div className='w-full flex flex-col    '>
                <Link to={""}className='text-white w-full py-4 hover:bg-[#6F0A1A] pl-4'
                onClick={()=>{


                    setDef(<MessagesTab/>)
                }}
                
                >Home : All Messages</Link>
                <Link to={""}className='text-white w-full py-4 bg-darg pl-4 hover:bg-[#6F0A1A] duration-500 bg-none'
                
                    onClick= {()=>{

                        setDef(<Clusters/>)
                    }}
                >My Clusters</Link>
                <Link to={""}className='text-white w-full py-4 bg-darg pl-4 hover:bg-[#6F0A1A] duration-500'>My Account Settings</Link>
                <Link to={""}className='text-white w-full py-4 bg-darg pl-4 hover:bg-[#6F0A1A] duration-500' >Home : All Clusters</Link>
                <Link to={""}className='text-white w-full py-4 bg-darg pl-4 hover:bg-[#6F0A1A] duration-500'>API KEY & Docs</Link>
                    
                </div>
                <div></div>
                <div className='pb-10'>
                    <button className='text-purple bg-white rounded w-48 h-11 font-bold' onClick={()=>{
                        localStorage.removeItem("token")
                        window.location.href = "/signin"
                    }}>
                        Logout
                    </button>
                </div>
            </aside>
            <aside className='w-3/4 h-full '>
                {
                    deFault
                }
            </aside>
        </div>
        )
}

export default Me