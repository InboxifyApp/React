import * as React from 'react'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './components'
const SearchBox = ({...props}) =>{

    return (
        <div className='w-full h-auto'>
            <div className='w-full h-auto flex p-10 items-center'>
            
                <p className='text-white font-bold'>Search By : &nbsp;</p>
                <div className=''>
                <button className='bg-purple text-white px-7 py-1 duration-300 hover:bg-[#6F0A1A] rounded-full mx-1 shadow-xl'>ID</button>
                <button className='bg-purple text-white px-7 py-1 duration-300 hover:bg-[#6F0A1A] rounded-full mx-1 shadow-xl'>Subject</button>
                <button className='bg-purple text-white px-7 py-1 duration-300 hover:bg-[#6F0A1A] rounded-full mx-1 shadow-xl'>Name</button>
                <button className='bg-purple text-white px-7 py-1 duration-300 hover:bg-[#6F0A1A] rounded-full mx-1 shadow-xl'>Email</button>
                <button className='bg-purple text-white px-7 py-1 duration-300 hover:bg-[#6F0A1A] rounded-full mx-1 shadow-xl'>Phone</button>
                <button className='bg-purple text-white px-7 py-1 duration-300 hover:bg-[#6F0A1A] rounded-full mx-1 shadow-xl'>Cluster</button>
                </div>
            </div> 
            <ChakraUI.FormControl className='flex w-full pl-10'>
                <Components.Input Type="email" Placeholder="Search Keyword" Class="w-2/5 h-auto"/>
                <button className='text-white flex items-center justify-center w-40 bg-purple rounded ml-2'>Search</button>
            </ChakraUI.FormControl> 

            <div className='w-full h-auto pl-10 pt-10 flex items-center gap-2'>
                <span className='w-4 h-4 shadow-xl rounded-full bg-purple block'></span> <p className='text-white text-sm'>Checked</p>
                <span className='w-4 h-4 shadow-xl rounded-full bg-[#28503D] block'></span> <p className='text-white text-sm'>New Messages</p>
                <span className='w-4 h-4 shadow-xl rounded-full bg-[#313131] block'></span> <p className='text-white text-sm'>Archive</p>
                <span className='w-4 h-4 shadow-xl rounded-full bg-[#964B21] block'></span> <p className='text-white text-sm'>Cluster Name</p>
            </div>
        </div>
    )
}


export default SearchBox