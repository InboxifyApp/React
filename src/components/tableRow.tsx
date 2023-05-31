import * as React from 'react'



const TableRow = ({...props}) =>{
    

    return (
        <div className={`w-11/12  h-auto flex m-auto   justify-between mt-5 ${!props.Viewed ? "bg-[#28503D]" : "bg-[#313131]" }`}>
            <span className='text-white text-sm px-5 py-3 bg-purple'>1</span>
            <span className='text-white text-sm py-3'>Alaa Barka</span>
            <span className='text-white text-sm py-3'><a href="call:">54324884</a></span>
            <span className='text-white text-sm py-3 underline'><a href="mailto:">tmakaveli643@gmail.com</a></span>
            <span className='text-white py-3 text-sm'>subji</span>
            <span className='text-white py-3 pr-10 text-sm'>hello world this is the real machiavelli</span>
            <div>
                <button className='px-10 py-3 bg-[#964B21] text-white text-sm'>Brolly</button>
                <button className='px-10 py-3 bg-purple text-white text-sm'>View</button>
            </div>
        </div>
    )
}

export default TableRow