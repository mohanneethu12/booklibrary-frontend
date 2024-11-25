import React from 'react'
import { Link } from 'react-router-dom'

function BookCard(props) {
    const book = props.book
  return (
    <div>
         <article>
            <Link to={`/books/${book._id}`}>
                <img className='w-full aspect-3/4 object-cover' src={book.thumbnail} alt={book.name} />
            </Link>
            <h2 className='my-2 text-2xl font-bold'>{book.title}</h2>
            <span className='text-gray-600 mb-5'>{book.author}</span>
        </article>
    </div>
  )
}

export default BookCard