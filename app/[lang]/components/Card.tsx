import React from 'react'

function Card({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-1 bg-base-300 rounded-md p-2 m-1">
          {children}
        </div>
    )
}

export default Card