import * as React from 'react'
import dataFrame from './../assets/p.json'
import  Lottie  from 'lottie-react'

const Loader = ({...props}) =>{
    const pRef = React.useRef()
    return (
        <div className={`w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-purple flex-col ${props.Hid}`}
            
        >
            <Lottie LottieRef={pRef} animationData={dataFrame} style={{
                        height:170
            }} />

            <p className="text-white text-xl font-bold">Loading...</p>
        </div>
    )

}

export default Loader