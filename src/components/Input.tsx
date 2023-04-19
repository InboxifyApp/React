import * as ChakraUI from '@chakra-ui/react'


const Input = ({...props}) =>{

    return (
        <ChakraUI.Input 
        
            {...props} className={` h-auto p-2 text-sm rounded bg-[#313131] border border-[#666666] outline-none text-white  shadow-5xl ${props.Class}`}
            value = {props.Value} 
            onChange = {props.onChange}
            type={props.Type}
            placeholder={props.Placeholder}

        />
    )
}

export default Input