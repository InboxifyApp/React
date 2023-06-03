import * as React from 'react'
import axios from 'axios'


const useSearch = () =>{
    const [filter, setFilter] : any = React.useState([])
    const [search, setSearch] : any  = React.useState("")
    const [result, setResult] : any = React.useState([])
    const sendKeyword = async (datas : any) =>{
        //datas is our array 
        
    }


    return {
        filter, setFilter , search , setSearch
    }
}

export default useSearch