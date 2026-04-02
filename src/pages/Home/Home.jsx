import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Gallery from '../../components/Gallery/Gallery'
import Projects from '../../components/Projects/Projects'

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Gallery/>
        <Projects/>
    </>
  )
}

export default Home