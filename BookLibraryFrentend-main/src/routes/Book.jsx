import React from 'react'
import { useLoaderData } from 'react-router-dom';

export async function loader({params}){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${params.bookId}`)
    const book = await response.json();
    console.log(book);
    return { book }
}
function Book(props) {
    const {book} = useLoaderData();
  return (
    <main className='container m-auto'>
        <h1 className='text-3xl font-bold my-4'>Book</h1>
        <div className='grid grid-cols-2 gap-6 items-center mt-10'>
            <img src={book.thumbnail} alt="" />
            <div>
                <h2 className='font-bold my-5'>{book.title}</h2>
                <span>{book.author}</span>
                <p className='text-gray-400 mt-5'>{book.description}</p>
            </div>
        </div>
    </main>
  )
}

export default Book