import React from 'react'
import { ReactComponent as Search } from '../svgs/search.svg'
import { ReactComponent as Favourite } from '../svgs/favorite.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='header-nav'>
      <div className="container mx-auto">
        <div className="inner">
          {/* LOGO */}
          <Link to='/home' className="logo">
            Booksy
          </Link>

          {/* SEARCH INPUT */}
          <div className="search">
            <input 
              className='border-none'
              type="text" 
              placeholder='Search by author, title, name' 
            />
            <Search />
          </div>

          {/* OTHERS */}
          <div className="others">
            <Favourite className='favourite-icon' />
            <div className="cart">
              0
            </div>
            <button className="language">EN</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
