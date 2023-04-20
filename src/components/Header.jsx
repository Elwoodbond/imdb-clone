import MenuItem from './MenuItem'
import React from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

export default function header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title="HOME" address="/" Icon={AiFillHome} />
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className=''>
            <Link href='/' className='mx-4 lg:mx-6 hover:text-amber-600'>
                <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
            </Link>
        </div>
    </div>
    )
}