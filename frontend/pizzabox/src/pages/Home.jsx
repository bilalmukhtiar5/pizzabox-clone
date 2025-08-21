import React from 'react'
import PreNavbar from '../components/PreNavbar'
import Navigation from '../components/Navigation'
import Search from '../components/Search'
import Modal from '../components/Modal/Modal'
import Footer from '../components/Footer/Footer'
import TimeStamp from '../components/TimeStamp'


const Home = () => {

  return (
    <>
      <TimeStamp/>
      <PreNavbar/>
      <Navigation/>
      <Search/>
      <Modal/>
      <Footer/>
    </>
  )
}

export default Home