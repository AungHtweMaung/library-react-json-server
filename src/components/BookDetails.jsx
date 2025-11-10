// import React from 'react'
import { useParams } from 'react-router-dom'
import bookImage from '../assets/book.png';
import useFetch from '../hooks/useFetch';

export default function BookDetails() {

    let params = useParams();

    let url = `http://localhost:3000/books/${params.id}`;

    let { data: book, error, loading } = useFetch(url);

    // let [book, setbook] = useState(null);

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setbook(data));
    // }, [url]);

    // console.log(book);



    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p className='text-center'>Loading ...</p>}
            {book && <div className='grid grid-cols-2 gap-4 '>
                <div>
                    <img style={{ width: '100%', height: '400px' }} src={bookImage} alt="" />
                </div>
                <div className='space-y-3 p-3'>
                    <h1 className='text-4xl'>{book.title}</h1>
                    {(book.categories || []).map((category, index) => (
                        <span key={index} className='bg-primary px-2 py-1 rounded-full text-sm text-white mr-3'>{category}</span>
                    ))}
                    <p className='indent-20 text-justify'>{book.description}</p>
                </div>
            </div>}
        </>
    )
}
