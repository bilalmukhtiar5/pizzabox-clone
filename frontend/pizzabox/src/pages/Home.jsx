import React from 'react'
import PreNavbar from '../components/PreNavbar'
import Navigation from '../components/Navigation'
import Search from '../components/Search'
import Modal from '../components/Modal/Modal'
import Footer from '../components/Footer/Footer'
import TimeStamp from '../components/TimeStamp'
import AddCategory from '../components/AddCategory'
import AddProduct from '../components/AddProduct'




const Home = () => {

  return (
    <>
      <TimeStamp/>
      <PreNavbar/>
      <Navigation/>
      <Search/>
      <Modal/>
      <AddCategory />
      <AddProduct/>
      
      <Footer/>
    </>
  )
}

export default Home