import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navConfig = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Bestseller',
    path: '/bestseller',
  },
  {
    title: 'Category',
    path: '/categories',
  },
  {
    title: 'Find a store',
    path: '/find-store',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
]

export default function Navbar() {
  let location = useLocation();
  return (
    <nav className='navbar'>
      <div className="container mx-auto">
        <ul className="navlinks">
          {navConfig.map(ele => (
            <li key={ele.title} className={`${location.pathname === ele.path && 'active'}`}>
              <Link to={ele.path}>{ele.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
