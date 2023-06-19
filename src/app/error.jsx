"use client"

import { useEffect } from 'react'
export default function Error({ error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error]);
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-semibold text-center">Whoops! Something went wrong</h1>
            <button className='hover:text-amber-600' onClick={()=>reset()}>Please try again</button>
        </div>
    )
}