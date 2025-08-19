import React from 'react'
import PreNavbar from '../components/PreNavbar'
import Navigation from '../components/Navigation'
import Search from '../components/Search'

import Modal from '../components/Modal/Modal'


const Home = () => {

  return (
    <>
      
      <PreNavbar/>
      <Navigation/>
      <Search/>
      <Modal/>
    </>
  )
}

export default Home