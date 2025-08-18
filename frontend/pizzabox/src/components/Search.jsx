import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Search = () => {
  return (
    <section className="container-fluid bg-light py-2">
  <div className="container">
    <div className="position-relative">
      {/* Search Input */}
      <input 
        type="text" 
        className="form-control ps-5 py-2 shadow-sm rounded" 
        placeholder="Search for items..." 
      />
      {/* Icon inside input */}
      <IoIosSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted fs-5" />
    </div>
  </div>
</section>

  )
}

export default Search