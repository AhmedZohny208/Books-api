import React from 'react'
import Book from './Book'

export default function PopularNow({ books }) {

  const popularBooks = books.slice(1, 7)

  return (
    <div className='popular'>
      <div className="container mx-auto">
        <h2>Popular Now</h2>

        <div className="books grid grid-cols-6 gap-x-8">
          {popularBooks.map(ele => (
            <Book key={ele.id} title={ele.title} author={ele.authors[0].name} image={ele.formats['image/jpeg']}  />
          ))}
        </div>
      </div>
    </div>
  )
}
