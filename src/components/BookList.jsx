import React from 'react';
import useFetch from '../hooks/useFetch';
import Book from './Book';

export default function BookList() {
    let { data: books, loading, error } = useFetch('http://localhost:3000/books');

    return (

        <>
            {loading && <p className='text-center my-4'>loading ...</p>}
            {error && <p>{error}</p>}

            {books && <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 my-3'>
                {books.map((book) => <Book key={book.id} book={book} />)}
            </div>}
        </>
    )
}
