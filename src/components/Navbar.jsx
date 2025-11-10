import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import profile from '../assets/profile.jpg';
import { ThemeContext } from '../contexts/ThemeContext';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
    // if (search) console.log(search);
    let [search, setSearch] = useState('');
    let { theme } = useTheme();

    let navigate = useNavigate();

    function handleSearch() {
        if (search !== '') {
            navigate('/?searchKey=' + search);
        }
    }


    return (

        <nav className={`bg-white p-3 ${theme === 'dark' ? 'bg-yellow-200': 'bg-white'}`}>
            <ul className='flex justify-between max-w-6xl mx-auto'>
                <li className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>


                    <input onChange={(e) => setSearch(e.target.value)} placeholder='Search ...' id="" type="text" name="" className='outline-0' />
                    <button onClick={handleSearch} className='bg-primary p-2 rounded-2xl text-white'>Search</button>

                </li>
                <Link to={'/'} className='flex gap-2 items-center md:-ml-32 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>

                    <span className='text-2xl font-bold hidden sm:block text-primary'>BookStore</span>
                </Link>
                <li className='flex gap-2 items-center'>
                    <Link to={'create'} className='flex items-center bg-primary py-2 px-3 text-white rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <span className='hidden sm:block'>Create Book</span>
                    </Link>
                    <img src={profile} alt="" className='w-12 h-12 border-0 rounded-full' />
                </li>
            </ul>
        </nav>

    )
}
