import * as React from 'react'



const TableRow = ({...props}) =>{
        console.log(props.MSG)

    return (
        <div className={`w-11/12  h-auto flex m-auto   justify-between mt-5 ${!props.Viewed ? "bg-[#28503D]" : "bg-[#313131]" }`}>
            <span className='text-white text-sm px-5 py-3 bg-purple'>{
                props.MSG ? props.MSG.id : ""
            }</span>
            <span className='text-white text-sm py-3'>{
                props.MSG? props.MSG.fullname : ""
            }</span>
            <span className='text-white text-sm py-3'><a href="call:">{

                props.MSG ? props.MSG.phone : ""
            }</a></span>
            <span className='text-white text-sm py-3 underline'><a href="mailto:">{
                props.MSG ? props.MSG.email : ""
            }</a></span>
            <span className='text-white py-3 text-sm'>{

                props.MSG ? props.MSG.subject : ""
            }</span>
            <span className='text-white py-3 pr-10 text-sm'>
                {


                    props.MSG ? props.MSG.message.length > 30 ? props.MSG.message.substring(0, 30) + "..." : props.MSG.message : ""
                }
            </span>
            <div>
                <button className='px-10 py-3 bg-[#964B21] text-white text-sm'>Brolly</button>
                <button className='px-10 py-3 bg-purple text-white text-sm'>View</button>
            </div>
        </div>
    )
}

export default TableRow