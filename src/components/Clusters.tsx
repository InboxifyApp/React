import * as React from 'react'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './../components/components'
const Clusters = ({...props}) =>{
    return (
        <div className='w-full h-full pt-10'>
            <ChakraUI.FormControl className='flex w-full pl-10 m-auto justify-center'>
                <Components.Input Type="email" Placeholder="Search Keyword" Class="w-2/5 h-auto"/>
                <button className='text-white flex items-center justify-center w-40 bg-purple rounded ml-2'>Search</button>
            </ChakraUI.FormControl> 


            
        </div>
    )
}

export default Clusters