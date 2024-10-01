import React from 'react'

function Input({ label, ...args }) {
    return (
        <div className='flex flex-col gap-2 text-sm'>
            {label && <label className='text-xs font-medium capitalize'>{label?? "Label"}</label>}
            <input {...args} className='rounded-full px-4 py-2 focus:border-[#0C50A3] focus:border-2 outline-none border border-gray-200' />
        </div>
    )
}

export default Input