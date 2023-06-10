import * as React from 'react'
import * as SVG from './../components/svg'
import * as  Router from 'react-router-dom'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './../components/components'
import useLogin from '../hooks/useLogin'
import * as Toast from 'react-hot-toast'
import  check from './../utils/checks'
import * as Cookies from 'react-cookie'
import dataFrame from './../assets/p.json'
import Lottie from 'lottie-react'
const SignIn = () =>{

        const [Hid, setHid] = React.useState("hidden")
        const pRef = React.useRef()
        const [cookie, setCookie, removeCookie] = Cookies.useCookies()

    const {
        username,
        setUser,
        password,
        setPassword,
        makeAuth
        
    }= useLogin()
    
    const {checkLogin} = check({
        username  : username , 
        password : password ,
    })
    return (
        <div className='w-full h-screen bg-dark flex '>
            <aside className='h-full w-2/5 bg-purple loginTablet:flex flex-col items-center justify-between py-2 hidden'> 
                <div>
                    <p className='text-white font-bold p-2 text-xl'>Pigeon</p>
                </div>

                <div>
                   <div className='flex justify-center'>
                       { 
                       //<SVG.Logo Width="200"/>
                       }
                       <Lottie LottieRef={pRef} animationData={dataFrame} style={{
                        height:170
                       }} />
                   </div>
                    <p className='text-white font-bold w-2/3 text-center m-auto'>
                        Let Us Collect Your Messages From Your Targets Or Visitors
                    </p>
                </div>

                <div>
                    <p className='text-white text-sm'>Made By 
                        <Router.Link to={"https:/machiavelli.vercel.app"} target='_blank'> @Machiavelli</Router.Link>
                    </p>
                </div>
            </aside>
            <aside className='loginTablet:w-3/5 w-full h-full flex flex-col items-center justify-between py-2 pb-5'>
                <div className='w-full h-auto flex'>
                    <p className='text-white font-bold p-2 '>Welcome Back</p>
                </div>
                <div className='w-1/2  h-auto '>
                    <ChakraUI.FormControl className='flex flex-col gap-y-4 items-left' onSubmit={()=>{
                        
                    }}>
                        <p className='text-white font-bold text-3xl pb-5'>SignIn</p>
                        <Components.Input Type="email" Placeholder="Email Or Username" Class="w-full h-auto"
                            Value={username}
                            onChange={(e :any ) => setUser(e.target.value)}
                        />
                        <Components.Input Type="password" Placeholder="Password" Class="w-full h-auto"
                            Value={password}
                            onChange={(e :any ) => setPassword(e.target.value)}
                        />
                        <div className='w-full flex flex-row justify-between '>
                            <Router.Link to={""} className='text-white underline text-sm py-2 '>Forgot Password ?</Router.Link>
                            <ChakraUI.Button 
                            onClick={async ()=>{
                                setHid("")
                                //set timeout 
                                await new Promise(resolve => setTimeout(resolve, 1000));
                                const checks : any = checkLogin()
                                if (checks.length > 0) {
                                    checks.map((check : any) => {
                                            Toast.toast.error(check)
                                    })
                                } else {
                                    await makeAuth().then((res:any) =>{
                                        if (res.status == 200) {
                                            //setCookie('token', res.data.token)
                                            localStorage.setItem("token" ,res.data.token)
                                            window.location.href = '/me'
                                        } else {
                                            console.log(res)
                                            Toast.toast.error(res.data)

                                        }

                                    }).catch((err:any) =>{
                                        console.log(err)
                                        Toast.toast.error(err.data)



                                    })

                                }    
                                
                                setHid("hidden")
                            }}
                            className='w-auto px-10 h-auto p-2 text-sm rounded bg-purple  outline-none border border-purple duration-200  text-white  shadow-5xl'>
                                SignIn 
                            </ChakraUI.Button>
                        </div>
                    </ChakraUI.FormControl>
                </div>

                    <Components.Omsg>
                        <p className='text-white text-sm'>Don't Have An Account ? &nbsp;
                            <Router.Link to={"/signup"} className='text-white underline text-sm py-2 font-bold'>Create One</Router.Link>
                        </p>
                    </Components.Omsg>
            </aside>
            
            <Components.Loader
                Hid={Hid}
            />
        </div>
    )
}


export default SignIn