import * as React from 'react'




const Modal = ({...props}) =>{
    return (
        <div className={`${props.Vis} w-3/4 text-center h-screen bg-[#000000ad] fixed top-0 flex items-center justify-center`}>
            <button className='text-[#b7b4b4] fixed right-4 top-3 text-xl'
                onClick={()=>{props.setVis("hidden")}}
            >x</button>
            <div className={`w-full h-full bg-dark  ${props.Style} rounded shadow-sm py-2 pb-5 flex items-center justify-center px-10`}>

                {props.children}

            </div>

        </div>
    )
}

export default Modal