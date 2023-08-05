import React from 'react';

const Loader = () => {
return (
        <>
            <div className='flex items-center gap-1 justify-center h-[calc(100vh-200px)]'>
                <p className='loading-text'>L</p>
                <div className='mt-3 border-8 rounded-full border-dashed border-[#A2F740] w-10 h-10 animate-spin'></div>
                <p className='loading-text'>ading</p>
            </div>
        </>
    );
};

export default Loader;