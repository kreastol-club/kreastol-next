import React from 'react'

function LoadingSkeleton() {
    return (
        <div className='w-full h-full items-center flex text-center'>
            <span className="loading loading-spinner loading-lg m-auto"></span>
        </div>
    )
}

export default LoadingSkeleton;