import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList'
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/addcategory"  element={<AddCategory/>}/>
      <Route path="/listcategory"  element={<CategoryList/>}/>
      
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
