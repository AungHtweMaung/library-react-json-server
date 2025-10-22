import React from 'react'
import bookImage from '../assets/book.png';
import { useNavigate } from 'react-router-dom';

export default function Book({book}) {
    
    let navigate = useNavigate();


    return (
        <div className='border border-1 p-4 cursor-pointer' onClick={() => navigate(`books/${book.id}`)}>
            <img src={bookImage} alt="" />
            <div className='text-center mt-3 space-y-2'>
                <h1 className=''>{book.title}</h1>
                <p >{book.description.slice(0, 100) + '...'}</p>

                <div className='flex flex-wrap gap-2 '>
                    {book.categories.map((category, index) => (
                        <span key={index} className='bg-primary px-2 py-1 rounded-full text-sm text-white'>{category}</span>
                    ))}
                </div>
            </div>

        </div>
    )
}
