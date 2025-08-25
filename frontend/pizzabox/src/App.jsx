import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList'
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/addcategory"  element={<AddCategory/>}/>
      <Route path="/listcategory"  element={<CategoryList/>}/>
      
      </Routes>
      <ToastContainer
      position="top-right"
        autoClose={3000}     // ✅ 3 second me close
        hideProgressBar={false}
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
