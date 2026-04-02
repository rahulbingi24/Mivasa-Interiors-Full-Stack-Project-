import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App