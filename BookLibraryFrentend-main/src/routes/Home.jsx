import React from 'react'
import BookCard from '../components/BookCard'
import { useLoaderData } from 'react-router-dom';

export async function loader(){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books`)
    const books = await response.json();
    console.log(books)
    return{ books }

}

function Home() {
    const { books } = useLoaderData();
  return (
    <div className='container mx-auto'>
            <h1 className='text-2xl mt-10 mb-5'>New Release</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book=>{
                        return <BookCard key={book._id} book={book}/>
                    })
                }
            </div>
       
    </div>
  )
}

export default Home