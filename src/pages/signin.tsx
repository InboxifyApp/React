import * as React from 'react'
import * as SVG from './../components/svg'
import * as  Router from 'react-router-dom'

import * as ChakraUI from '@chakra-ui/react'


import * as Components from './../components/components'

import * as Redux from 'redux'

import useReduxLogin from '../utils/login.redux'
const SignIn = () =>{

    return (
        <div className='w-full h-screen bg-dark flex '>
            <aside className='h-full w-1/3 bg-purple loginTablet:flex flex-col items-center justify-between py-2 hidden'> 
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
            <aside className='loginTablet:w-2/3 w-full h-full flex flex-col items-center justify-between py-2 pb-5'>
                <div className='w-full h-auto flex'>
                    <p className='text-white font-bold p-2 '>Welcome Back</p>
                </div>
                <div className='w-1/2  h-auto '>
                    <ChakraUI.FormControl className='flex flex-col gap-y-4 items-leftr'>
                        <p className='text-white font-bold text-3xl pb-5'>SignIn</p>
                        <Components.Input Type="email" Placeholder="Email Or Username" Class="w-full h-auto" />
                        <Components.Input Type="password" Placeholder="Password" Class="w-full h-auto" />
                        <div className='w-full flex flex-row justify-between '>
                            <Router.Link to={""} className='text-white underline text-sm py-2 '>Forgot Password ?</Router.Link>
                            <ChakraUI.Button className='w-auto px-10 h-auto p-2 text-sm rounded bg-purple  outline-none border border-purple duration-200  text-white  shadow-5xl'>
                                SignIn 
                            </ChakraUI.Button>
                        </div>
                    </ChakraUI.FormControl>
                </div>

                    <Components.Omsg>
                        <p className='text-white text-sm'>Don't Have An Account ? &nbsp;
                            <Router.Link to={""} className='text-white underline text-sm py-2 font-bold'>Create One</Router.Link>
                        </p>
                    </Components.Omsg>
            </aside>
        </div>
    )
}


export default SignIn