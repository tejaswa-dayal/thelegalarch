import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/hero';
const Home = () => {
  return (
    <main className='flex flex-col min-h-screen w-full'>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default Home
