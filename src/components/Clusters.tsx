import * as React from 'react'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './../components/components'
import {clusterData} from './../utils/fakeDatas'
const Clusters = ({...props}) =>{
    console.log(clusterData)
    return (
        <div className='w-full h-full pt-10'>
            <ChakraUI.FormControl className='flex w-full pl-10 m-auto justify-center'>
                <Components.Input Type="email" Placeholder="Search Keyword" Class="w-2/5 h-auto"/>
                <button className='text-white flex items-center justify-center w-40 bg-purple rounded ml-2'>Search</button>
            </ChakraUI.FormControl> 

            <div className="w-full h-auto overflow-auto flex items-center justify-center gap-2 flex-wrap pt-10">

                <Components.ClusterBox Data={{}}  />
                <Components.ClusterBox Data={{}} />
                {   
                clusterData.map((data:any, index:any) =>{
                    return (
                        <Components.ClusterBox Data={data} key={index}/>
                    )
                })
                    
                }
            </div>
        </div>
    )
}

export default Clusters