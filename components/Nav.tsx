import Link from 'next/link';
import React from 'react'

const Nav = () => {
  return (
    <>
      <div className="w-full flex flex-row items-center">
        <h2 className='unique_header text-4xl flex'>Kreastol</h2>
        <div className='w-full flex flex-1 justify-center items-center'>
          <Link key={'home'} className="px-4 py-1 mx-1 btn" href={'/'}>Home</Link>
          <Link key={'events'} className="px-4 py-1 mx-1 btn" href={'/events'}>Events</Link>
        </div>
        <span className="badge badge-primary badge-outline align-middle mr-2">preview</span>
      </div>
    </>
  )
}

export default Nav;