import * as React from 'react'

import dataFrame from './../assets/p.json'
import Lottie from 'lottie-react'
const SendErr = () =>{
    //create react ref 
    const pRef = React.useRef()

    return (

        <div className='w-full h-screen flex items-center justify-center bg-dark flex-col'>

            <Lottie LottieRef={pRef} animationData={dataFrame} style={{
                height:170
            }} />
            <p className='text-white text-xl '>You didn't provide an id for the cluster ! </p>
        </div>
    )
}

export default SendErr