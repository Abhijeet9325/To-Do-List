import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-slate-700 py-2 px-2 flex justify-around m-auto'>
                <h1 className='flex cursor-pointer justify-between  text-white font-bold '>iTasks</h1>
                <ul className='flex cursor-pointer gap-8  text-white font-semibold '>
                    <li>Home</li>
                    <li>Your Tasks</li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar
