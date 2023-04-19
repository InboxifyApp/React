

import * as Router from 'react-router-dom'


const Omsg = ({...props}) =>{
    return (
        <div className='bg-purple border border-white shadow-xl w-1/3 h-14 flex items-center justify-center'>

            {props.children}
        </div>
    )
}

export default Omsg