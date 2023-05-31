import * as React from 'react'
import SearchBox from './Search.box'
import * as Components from './../components/components'
import {messages} from './../utils/fakeDatas'
const MessagesTab = ({...props}) =>{
    return (
        <div className='w-full h-screen overflow-auto'>
            <SearchBox/>
                <Components.TableRow Viewed={true}/>
                {
                    messages.map((data:any, index:any) => {
                        return (
                            <Components.TableRow Viewed={data.Viewed} key={index}/>
                        )
                    })
                }

        </div>
    )
}

export default MessagesTab