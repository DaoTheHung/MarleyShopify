import React, { useEffect } from 'react';


const BackTop = ({ handleBackTop }) => {

    return (
        <div onClick={handleBackTop} className='cursor-pointer w-[45px] h-[45px] bg-pink-500 flex items-center justify-center fixed z-[1000] right-[10px] bottom-[10px]'>
            <div className='text-[23px] text-white'>
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </div>
    );
}

export default BackTop;
