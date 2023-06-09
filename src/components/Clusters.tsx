import * as React from 'react'
import * as ChakraUI from '@chakra-ui/react'
import * as Components from './../components/components'
import {clusterData} from './../utils/fakeDatas'
import useCluster from '../hooks/useCluster'
import Modal from './Modal'
const Clusters = ({...props}) =>{

    const {
        name,
        setName,
        domain,
        setDomain,
        description,
        setDescription,
        color,
        setColor, 
        Save

    } = useCluster()
    

    const [vis, setVis] : any = React.useState("hidden")
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


            <div className='fixed right-2 bottom-2'>
                <button className='text-white px-5 py-3 shadow-sm rounded-full bg-purple' title='Add Cluster' onClick={()=>{setVis("block")}}>
                    +
                </button>
            </div>



                <Modal Vis={vis} setVis={setVis} >

                    <div className='w-full h-auto px-5'>
                        <p className='font-bold text-white flex items-center justify-center w-full'>Add new Cluster</p>
                        <ChakraUI.FormControl className='gap-2 pt-5 px-14'>
                            <Components.Input Type="text" Placeholder="Name of the cluster" Class=" h-auto w-3/5 m-auto"
                                value={name}
                                onChange={(e:any)=>{setName(e.target.value)}}                                
                            />
                            <Components.Input Type="text" Placeholder="Domain of the cluster" Class=" h-auto  w-3/5  m-auto block mt-2"
                                value={domain}
                                onChange={(e:any)=>{setDomain(e.target.value)}}

                            />
                            <Components.Input Type="text" Placeholder="Description" Class=" h-auto  w-3/5 m-auto block mt-2"
                                value={description}
                                onChange={(e:any)=>{setDescription(e.target.value)}}
                            />

                            
                            <div className={`w-2/4 py-2 m-auto   mt-2  rounded`}
                                style={{backgroundColor:color}}
                            >

                            <Components.Input Type="color" Placeholder="Description" Class=" custom-color-input h-auto  w-auto m-auto block mt-2"
                                value={color}
                                onChange={(e:any)=>{
                                    setColor(e.target.value)
                                    console.log(color)
                                }
                                    
                                }
                            />

                            <p className='text-white'>Change the color</p>
                            </div>
                            <button className='bg-purple block m-auto shadow   mt-2 px-10 py-2 rounded text-white text-sm'
                                
                                onClick={()=>{  
                                    Save()
                                
                                }}
                            >
                                Add Cluster
                            </button>
                        </ChakraUI.FormControl>
                    </div>

                </Modal>
            
        </div>
    )
}

export default Clusters