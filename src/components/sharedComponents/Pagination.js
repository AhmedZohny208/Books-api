import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Pagination({ currentPage, setCurrentPage }) {
  let navigate = useNavigate();

  const pages = [
    { page: Number(currentPage) },
    { page: Number(currentPage) + 1 },
    { page: Number(currentPage) + 2 },
    { page: Number(currentPage) + 3 },
  ]
  function Next ()
  {
    setCurrentPage(++currentPage)
    navigate(`/books?page=${currentPage}`)
  }
  function back ()
  {
    Number(currentPage) > 1 && setCurrentPage(--currentPage)
    navigate(`/books?page=${currentPage}`)
  }

  return (
    <div className="flex justify-center rounded-lg">
      <button onClick={back} className="h-12 border-2 border-r-0 border-indigo-600
            px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </button>
      {
        pages.map((pg, i) => (
            <button 
              key={i} 
              onClick={() => {
                setCurrentPage(pg.page)
                navigate(`/books?page=${pg.page}`)
              }} 
              className={`h-12 border-2 border-r-0 border-indigo-600 w-12 ${currentPage == pg.page && 'bg-indigo-600 text-white'}`}
            >
              {pg.page}
            </button>
        ))
      }
      <button onClick={Next} className="h-12 border-2  border-indigo-600
            px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
      </button>
    </div>
  )
}
