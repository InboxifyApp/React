import * as React from 'react'
import * as SVG from './../components/svg'
import * as  Router from 'react-router-dom'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './../components/components'

const SignUp = () =>{


    const [username, setUser] = React.useState("") 
    const [password, setPass] = React.useState("") 
    return (
        <div className='w-full h-screen bg-dark flex '>
            <aside className='h-full w-2/5 bg-purple loginTablet:flex flex-col items-center justify-between py-2 hidden'> 
                <div>
                    <p className='text-white font-bold p-2 text-xl'>Pigeon</p>
                </div>

                <div>
                   <div className='flex justify-center'>
                        <SVG.Logo Width="200"/>
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
                    <p className='text-white font-bold p-2 '>Create Account</p>
                </div>
                <div className='w-1/2  h-auto '>
                    <ChakraUI.FormControl className='flex flex-col gap-y-4 items-leftr'>
                        <p className='text-white font-bold text-3xl pb-5'>SignUp</p>
                        <Components.Input Type="email" Placeholder="Full Name" Class="w-full h-auto"
                            
                        />
                        <Components.Input Type="email" Placeholder="Username" Class="w-full h-auto"
                            
                        />

                        <Components.Input Type="date"  Class="w-full h-auto text-white"
                            
                            />
                        <div className='w-full flex flex-row justify-end '>
                            <ChakraUI.Button 
                            onClick={()=>{
                                console.log(username, password)
                            }}
                            className='w-auto px-10 h-auto p-2 text-sm rounded bg-purple  outline-none border border-purple duration-200  text-white  shadow-5xl'>
                                Go Ahead 
                            </ChakraUI.Button>
                        </div>
                    </ChakraUI.FormControl>
                </div>

                    <Components.Omsg>
                        <p className='text-white text-sm'>Already Have One ? &nbsp;
                            <Router.Link to={"/signin"} className='text-white underline text-sm py-2 font-bold'>Login</Router.Link>
                        </p>
                    </Components.Omsg>
            </aside>
        </div>
    )
}


export default SignUp