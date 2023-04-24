import * as React from 'react'
import * as Cookie from 'react-cookie'
import useToken from '../hooks/useAuth'
import useGetDatas from '../hooks/getUser'
import * as SVG from './../components/svg'
import { Link } from 'react-router-dom'
const Me = () =>{
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
                    <p className='text-white text-bold font-bold pt-4'>{datas.datas.fullname}</p>
                </div>  
                <div className='w-full flex'>
                    <Link to={""}className='text-white w-full py-4 bg-darg'>Home : All Clusters</Link>
                    
                </div>
            </aside>
            <aside className='w-3/4 h-full '></aside>
        </div>
        )
}

export default Me