import React from 'react'

function AuthorCard(props) {
    const author = props.author
  return (
    <article>
        <img src={author.thumbnail} alt="" />
        <h3 className='text-xl mt-3 font-bold'>{author.name}</h3>
    </article>
  )
}

export default AuthorCard