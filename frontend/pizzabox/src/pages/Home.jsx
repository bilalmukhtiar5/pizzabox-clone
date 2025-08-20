import React from 'react'
import PreNavbar from '../components/PreNavbar'
import Navigation from '../components/Navigation'
import Search from '../components/Search'

import Modal from '../components/Modal/Modal'
import Footer from '../components/Footer/Footer'


const Home = () => {

  return (
    <>
      
      <PreNavbar/>
      <Navigation/>
      <Search/>
      <Modal/>
      <Footer/>
    </>
  )
}

export default Home