import * as React from 'react'

const Docs = ({...props}) =>{
    return (
        <div className='w-full h-screen '>
            <p>Your API Key is : {
                localStorage.getItem("api_key")
                }</p>
        </div>
    )
}


export default Docs