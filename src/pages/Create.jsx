import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');
  let [submitting, setSubmitting] = useState(false);

  let [categories, setCategories] = useState([]);

  let [newCategory, setNewCategory] = useState('');

  let navigate = useNavigate();

  let handleAdd = () => {
    setCategories((prev) => [...prev, newCategory]);
    setNewCategory('');
  }

  let handleRemoveCategory = (categoryIndex) => {
    // console.log(typeof(categoryIndex));
    setCategories((prev) => prev.filter((c, index) => index !== categoryIndex));
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // let [url, setUrl] = 'http://localhost:3000/books';

    let data = {
      id: Math.floor(Math.random() * 1000).toString(),
      title: title,
      description: desc,
      categories: categories
    };

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to create')
      }
      return res.json();
    }).then(() => navigate('/'));

    
    
  }

  return (
    <div className='max-w-3xl m-auto'>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6">
          <h1 className='text-center text-4xl'>Create Book</h1>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
          </div>
          <div>

            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea onChange={(e) => setDesc(e.target.value)} id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description ..."></textarea>

          </div>
          <div className=''>
            <label htmlFor="categories">Categories</label>
            <div className='flex gap-3 mt-2'>
              <input
                value={newCategory}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="categories"
                onChange={(e) => setNewCategory(e.target.value)}
              />


              <button
                onClick={handleAdd}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto p-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>

            </div>
            {categories && categories.map((c, index) => <div key={index} className='flex items-center space-y-2'>
              <span>{c}</span>
              { c && <span className='text-red-600 cursor-pointer' onClick={() => handleRemoveCategory(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </span>}


            </div>)}
          </div>

        </div>
        <button type="submit" disabled={submitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          { submitting ? 'Submitting...' : 'Submit' }
        </button>
      </form>


    </div>
  )
}
