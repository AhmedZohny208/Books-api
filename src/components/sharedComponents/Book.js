import React from 'react'

export default function Book({ title, author, image }) {
  return (
    <div className="book mb-20">
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
      </div>

      <div className="description">
        <h5>{title && (title.length > 10 ? `${title.substring(0, 40)}...` : title)}</h5>
        <p>{author}</p>
        <div className="rating">
          <svg className='active' xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
          <path d="M11.1473 17.4208L17.918 21.5073L16.1213 13.8054L22.1032 8.62322L14.2259 7.95491L11.1473 0.691162L8.06869 7.95491L0.191406 8.62322L6.17332 13.8054L4.37655 21.5073L11.1473 17.4208Z" fill="#F8A401"/>
          </svg>
          <svg className='active' xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
          <path d="M11.1473 17.4208L17.918 21.5073L16.1213 13.8054L22.1032 8.62322L14.2259 7.95491L11.1473 0.691162L8.06869 7.95491L0.191406 8.62322L6.17332 13.8054L4.37655 21.5073L11.1473 17.4208Z" fill="#F8A401"/>
          </svg>
          <svg className='active' xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
          <path d="M11.1473 17.4208L17.918 21.5073L16.1213 13.8054L22.1032 8.62322L14.2259 7.95491L11.1473 0.691162L8.06869 7.95491L0.191406 8.62322L6.17332 13.8054L4.37655 21.5073L11.1473 17.4208Z" fill="#F8A401"/>
          </svg>
          <svg className='active' xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
          <path d="M11.1473 17.4208L17.918 21.5073L16.1213 13.8054L22.1032 8.62322L14.2259 7.95491L11.1473 0.691162L8.06869 7.95491L0.191406 8.62322L6.17332 13.8054L4.37655 21.5073L11.1473 17.4208Z" fill="#F8A401"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
          <path d="M11.1473 17.4208L17.918 21.5073L16.1213 13.8054L22.1032 8.62322L14.2259 7.95491L11.1473 0.691162L8.06869 7.95491L0.191406 8.62322L6.17332 13.8054L4.37655 21.5073L11.1473 17.4208Z" fill="#F8A401"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
