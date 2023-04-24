import * as React from 'react'
import * as Cookie from 'react-cookie'
import useToken from '../hooks/useAuth'
const Me = () =>{
    const [cookie, setCookie, removeCookie] = Cookie.useCookies()

    const {resp, checkT} = useToken(localStorage.getItem("token")) 

    React.useEffect(() => {
        checkT()
    }, [])
    console.log(resp)
    if(resp && resp != 200) {
        //remove cookie 
        localStorage.removeItem("token")
        window.location.href = "/signin"
    }
    
        return (
        <div>
            <h1>heloo wol</h1>
        </div>
        )
}

export default Me