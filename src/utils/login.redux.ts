import * as Redux from 'redux'




const useReduxLogin = () =>{
    const initialState = {
        userame : '' , 
        password : '' ,
    }
    
    
    const setUsername = (username :any) =>({
        type : "SET_USERNAME" , 
        payload : username
    })
    
    const setPasword = (password : any) =>({
        type:"SET_PASSWORD" , 
        payload : password
    })
    


    const reducer = (state = initialState , action : any) =>{
        switch(action.type){
            case "SET_USERNAME" :
                return {...state , username : action.payload}
            case "SET_PASSWORD" :
                return {...state , password : action.payload}
            default :
                return state
        }
    }
    let current :any = initialState
    let listeners : any = [] 

    const dispatch = (action : any) =>{
        current = reducer(current , action)
        listeners.forEach((listener : any) => listener())
    }

    const getState = () =>current

    const subscribe = (listener : any) =>{
        listeners.push(listener)
        return () =>{
            listeners = listeners.filter((l : any) => l !== listener)
        }
    }


    return {
        initialState ,
        setUsername ,
        setPasword,
        reducer ,
        current ,
        listeners ,
        dispatch ,
        getState ,
        subscribe


    }
}

export default useReduxLogin