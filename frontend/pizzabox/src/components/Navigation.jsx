import React from 'react'
import '../components/Navigation.css'



const Navigation = () => {

  return (

    <nav className="container-fluid bg-dark">
      <div className="container p-3 text-danger">
        <ul className="d-flex justify-content-between list-unstyled m-0 px-5 fs-6">
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">BOX COMBOS</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">STARTERS</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">LEGENDS PIZZA</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">SIGNATURE PIZZA</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">PASTA</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">MORE</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">SALAD & DESSERT</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white text-decoration-none fw-medium nav-link-hover">BEVERAGES</a>
          </li>
          
        </ul>

      </div>
    </nav>


  )
}

export default Navigation