import * as React from 'react'
import SearchBox from './Search.box'
import * as Components from './../components/components'

const MessagesTab = ({...props}) =>{
    return (
        <div className='w-full h-auto '>
            <SearchBox/>
                <Components.TableRow Viewed={true}/>
            

        </div>
    )
}

export default MessagesTab