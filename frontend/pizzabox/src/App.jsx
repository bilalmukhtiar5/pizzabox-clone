import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <>
    
    <BrowserRouter>
      
      <Routes>
      <Route path="/"  element={<Home/>}/>
      {/* <Route path="/cart"  element={logininfo ? <Cart/> :<Navigate to='/login'/>}/>
      <Route path='/login' element={logininfo ? <Navigate to="/" /> : <Login />} />
      <Route path='/register' element={logininfo ? <Navigate to="/" /> : <Register />} />
      <Route path="/profile" element={logininfo ? <Profile/> :<Navigate to='/login'/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
