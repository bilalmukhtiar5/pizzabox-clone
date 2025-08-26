import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList'
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from 'react-toastify';
import AddProduct from './components/AddProduct';

import ProductList from './components/ProductList';


function App() {
  

  return (
    <>
    
    <BrowserRouter>
      
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/addcategory"  element={<AddCategory/>}/>
      <Route path="/listcategory"  element={<CategoryList/>}/>
      <Route path="/addproduct"  element={<AddProduct/>}/>
      <Route path="/listproduct"  element={<ProductList/>}/>
      
      </Routes>
      <ToastContainer
      position="top-left"
        autoClose={2000}     // ✅ 2 second me close
        hideProgressBar={true}  // ✅ progress bar hide
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
      </BrowserRouter>
      
    </>
  )
}

export default App
