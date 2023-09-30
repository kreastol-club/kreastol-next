import Link from 'next/link';
import React from 'react'

const Nav = () => {
  return (
    <div className="">
        <Link href={'/'}>Home</Link>
        <Link href={'/events'}>Events</Link>
    </div>
  )
}

export default Nav;