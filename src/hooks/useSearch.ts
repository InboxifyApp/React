import * as React from 'react'
import axios from 'axios'


const useSearch = () =>{
    const [filter, setFilter] : any = React.useState([])
    const [search, setSearch] : any  = React.useState("")
    const sendKeyword = async () =>{

    }

    return {
        filter, setFilter , search , setSearch
    }
}

export default useSearch