import Link from 'next/link';
import React from 'react'

const Nav = () => {
    return (
        <>
            <div className="w-full sm:flex flex-row sm:items-center relative">
                <div className="max-sm:relative">
                    <h2 className='unique_header text-4xl flex m-2'>Kreastol</h2>
                    <span className="badge badge-primary badge-outline absolute right-2 top-1/2 transform -translate-y-1/2">preview</span>
                </div>
                <div className='w-full flex flex-1 justify-center items-center'>
                    <Link key={'home'} className="mx-1 btn" href={'/'}>Home</Link>
                    <Link key={'events'} className="mx-1 btn" href={'/events'}>Events</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;