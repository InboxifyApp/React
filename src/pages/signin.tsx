import * as React from 'react'
import * as SVG from './../components/svg'
import * as  Router from 'react-router-dom'
const SignIn = () =>{
    return (
        <div className='w-full h-screen bg-dark flex '>
            <aside className='h-full w-1/3 bg-purple flex flex-col items-center justify-between py-2'> 
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
            <aside className='w-2/3 h-full '>


            </aside>
        </div>
    )
}


export default SignIn