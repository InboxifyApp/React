import * as React from 'react'
import SearchBox from './Search.box'
import * as Components from './../components/components'
import {messages} from './../utils/fakeDatas'
const MessagesTab = ({...props}) =>{
    let cl  : any = true 
    return (
        <div className='w-full h-screen overflow-auto pb-10'>
            <SearchBox/>
                <Components.TableRow Viewed={true}/>
                {
                    
                    messages.map((data:any, index:any) => {
                        return (
                            <>
                            {cl = cl ? false : true}
                            <Components.TableRow Viewed={cl} MSG={data} key={index}/>
                            </>
                        )
                         
                    }
                    
                    )
                }

        </div>
    )
}

export default MessagesTab