import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation  } from 'react-router-dom';
import Book from '../components/sharedComponents/Book'
import Pagination from '../components/sharedComponents/Pagination'

export default function AllBooks() {
  let location = useLocation();

  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(location.search.split('=')[1])

  useEffect(() => {
    setCurrentPage(location.search.split('=')[1])

    axios.get(`https://gutendex.com/books/?page=${currentPage}`)
      .then(({data}) => {
        setBooks(data.results)
      }) 
      .catch(error => {
        console.log(error);
      })
  }, [location, currentPage])

  return (
    <div className='popular'>
      <div className="container mx-auto">
        <div className="books grid grid-cols-6 gap-x-8">
          {books.map(ele => (
            <Book key={ele.id} title={ele.title} author={ele.authors[0] && ele.authors[0].name} image={ele.formats['image/jpeg']}  />
          ))}
        </div>

        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}
