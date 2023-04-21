

import * as Router from 'react-router-dom'


const Omsg = ({...props}) =>{
    return (
        <div className='bg-purple    shadow-xl login-Tablet:w-2/5 w-auto px-10 h-14 flex items-center justify-center rounded'>

            {props.children}
        </div>
    )
}

export default Omsg