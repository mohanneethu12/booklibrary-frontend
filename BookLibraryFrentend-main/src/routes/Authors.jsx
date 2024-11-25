import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AuthorCard from '../components/AuthorCard'

export async function loader(){
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors`)
  const authors = await response.json()
  return {authors}
} 

function Authors() {
  const {authors} = useLoaderData();
  
  return (
    <main className='container m-auto mt-5'>
      <section>
        <h1 className='text-3xl font-bold mb-5'>Author Details</h1>
       <div>
          {
            authors.map(author =>{
              return <AuthorCard key={author._id} author={author}/>
            })
          }
       </div>
      </section>
    </main>
  )
}

export default Authors