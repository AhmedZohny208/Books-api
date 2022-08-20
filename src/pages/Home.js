import React from 'react'
import Hero from '../components/sharedComponents/Hero'
import PopularNow from '../components/sharedComponents/PopularNow'

export default function Home({ books }) {
  return (
    <>
      <Hero />
      <PopularNow books={books} />
    </>
  )
}
