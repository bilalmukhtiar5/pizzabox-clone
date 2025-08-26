import React from 'react'
import PreNavbar from '../components/PreNavbar'
import Navigation from '../components/Navigation'
import Search from '../components/Search'
import Modal from '../components/Modal/Modal'
import Footer from '../components/Footer/Footer'
import TimeStamp from '../components/TimeStamp'
import BoxCombos from '../section/BoxCombos'
import ProductDisplayPage from '../components/ProductDisplayPage'




const Home = () => {

  return (
    <>
      <TimeStamp/>
      <PreNavbar/>
      <Navigation/>
      <Search/>
      <ProductDisplayPage/>
      <Footer/>
    </>
  )
}

export default Home