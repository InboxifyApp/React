import * as React from 'react'
import * as SVG from './../components/svg'
import * as  Router from 'react-router-dom'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './../components/components'
import useSignUp from '../hooks/useSignUp'
const SignUp = () =>{


    const {username,
        password, 
        email,
        phone,
        name,
        date,
        setUser,
        setPass,
        setEmail,
        setPhone,
        setName,
        setDate, 
        CreateUser
    } = useSignUp()
    const [btn , setbtn] : any = React.useState({
        type : "button" , 
        text : "Next"
    })
    
    
    const [Inps, setInps] = React.useState(
    
    <Components.Inps.FrstFields
        
        Name={name}
        onName={(e:any)=>{
            setName(e.target.value)
        }}
        Username={username}
        onUser={(e:any)=>{
            setUser(e.target.value)
        }}
        Date={date}
        onDate={(e:any)=>{
            setDate(e.target.value)
        }}
    />)
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
                    <ChakraUI.FormControl className='flex flex-col gap-y-4 items-leftr' onSubmit={()=>{
                        alert("Submit")
                    }}>
                        <p className='text-white font-bold text-3xl pb-5'>SignUp</p>
                            {
                                Inps
                            }
                        <div className='w-full flex flex-row justify-end '>
                            <ChakraUI.Button 
                            onClick={async ()=>{
                                
                                if(Inps.type.name == "FrstFields"){
                                    setInps(<
                                        Components.Inps.ScndFields
                                        Email={email}
                                        OneEmail={(e:any)=>{
                                            setEmail(e.target.value)
                                        }}
                                        Phone={phone}
                                        OnePhone={(e:any)=>{
                                            setPhone(e.target.value)
                                        }}
                                        Password={password}
                                        OnePass={(e:any)=>{
                                            setPass(e.target.value)
                                        }}
                                        
                                        />)
                                    setbtn({
                                        type : "submit" , 
                                        text : "Sign Up"
                                    })
                                }else{
                                    console.log("Done")
                                    await CreateUser()
                                    
                                }
                            }}
                            className='w-auto px-10 h-auto p-2 text-sm rounded bg-purple  outline-none border border-purple duration-200  text-white  shadow-5xl' type={btn.type}>
                                {
                                    btn.text
                                }
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