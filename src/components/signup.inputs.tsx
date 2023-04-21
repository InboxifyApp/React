import * as React from 'react'
import * as Components from './components'

const FrstFields = ({...props} : any) =>{
    return (
        <div className='flex flex-col gap-y-4'>
            <Components.Input Type="text" Placeholder="Full Name" Class={`w-full h-auto`}
            value={props.Name}
            Style={props.NameBorder}
            onChange={
                props.onName
            
            }
            
                            
            />
            <Components.Input Type="text" Placeholder="Username" Class={`w-full h-auto ${props.UserBorder}`}
                value={props.Username} 
                onChange={props.onUser}
            />
    
            <Components.Input Type="date"  Class={`w-full h-auto text-white ${props.DateBorder}`}
               value={props.Date}       
               onChange={props.onDate}

            />
        </div>
    )
}

const ScndFields = ({...props}) =>{
        return (

            <div className='flex flex-col gap-y-4'>
            <Components.Input Type="email" Placeholder="Email Address" Class={`w-full h-auto ${props.EmailBorder}`}
                value={props.Email}
                onChange={props.OneEmail}
            />
            <Components.Input Type="number" Placeholder="Phone Number" Class={`w-full h-auto ${props.PhoneBorder}`}
                value={props.Phone}
                onChange={props.onPhone}
            />
    
            <Components.Input Type="password" Placeholder="Password"  Class={`w-full h-auto text-white ${props.PassBorder}`}
                value={props.Password}
                onChange={props.onPass}

            />
    </div>
        )
}
export {FrstFields ,ScndFields}