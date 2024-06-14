import React from 'react'

export const CreateProduct = ({ showForm, setShowForm }) => {
    return (
        <div onClick={() => setShowForm(false)} className='fixed top-0 left-0 bottom-0 right-0 bg-black-300/90 z-[9999999]'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white w-[500px] h-[500px] rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                tê
            </div>
        </div>
    )
}
