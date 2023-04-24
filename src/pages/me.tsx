import * as React from 'react'
import * as Cookie from 'react-cookie'
import useToken from '../hooks/useAuth'
import useGetDatas from '../hooks/getUser'
const Me = () =>{
    const [cookie, setCookie, removeCookie] = Cookie.useCookies()

    const {datas, getDatas} = useGetDatas(localStorage.getItem("token")) 

    React.useEffect(() => {
        getDatas()
    }, [])
    console.log("tst" , datas)
    if(datas && datas.status != 200) {
        //remove cookie 
        //localStorage.removeItem("token")
        //window.location.href = "/signin"
    }

    console.log(datas)
    
    
        return (
        <div>
            <h1>heloo wol</h1>
        </div>
        )
}

export default Me