import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' w-full flex bg-blue-400 gap-7'>
        <Link href="/user" className=' mx-5' >
        <p className=' py-5 px-3 bg-slate-600 text-white mx-8'>user</p>
        </Link>
        <Link  href="/pentry">
            <p className=' py-5 px-3 bg-slate-600 text-white mx-8'>pentry</p>
        </Link>
        <Link href="/manager" >
        <p className=' py-5 px-3 bg-slate-600 text-white mx-8'>manager</p>
        </Link>
        <Link href="/signup" >
        <p className=' py-5 px-3 bg-slate-600 text-white mx-8'>Signup</p>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
