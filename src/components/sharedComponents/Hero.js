import React from 'react'
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className='hero container mx-auto'>
      <div className="inner">
        <div className="info">
          <h3>Build your library</h3>
          <p>Buy two selected books and get <br />one for free</p>
          <button 
            onClick={() => navigate({
              pathname: "/books",
              search: createSearchParams({page: 1}).toString()
            })} 
            className="view-all">
              View all
            </button>
        </div>
        <div className="image">
          <img src="imgs/book-read.jpg" alt="person-reading" />
        </div>
      </div>
    </div>
  )
}
