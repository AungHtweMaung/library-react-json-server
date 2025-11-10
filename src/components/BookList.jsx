import React from 'react';
import useFetch from '../hooks/useFetch';
import Book from './Book';
import { useLocation } from 'react-router-dom';

export default function BookList() {

    // filter with search key
    let location = useLocation(); // for current url
    let params = new URLSearchParams(location.search); // to get search key value, you have to use URLSearchParams firstly.
    let searchKey = params.get('searchKey') || '';
    // console.log(searchKey);
    
    let { data: books, loading, error } = useFetch(`http://localhost:3000/books?q=${searchKey}`);
    // if (searchKey && books) console.log(books);

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
