import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    
  });

  const { name, description } = formData;

  // handle input change
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/categories", formData);
    if (response.data.success) {
      setFormData({
        name: "",
        description: "",
        

      });
      toast.success(response.data.message);
    }

  };

  return (
    <form onSubmit={onSubmit} className="p-3 border m-2 rounded shadow-sm">
      <h4>Add Category</h4>

      <label htmlFor="">Name</label>
      <input type="text"
        name="name" placeholder="Category Name"
        value={name}
        onChange={onChange} required
        className="form-control mb-2" />

      <label htmlFor="">Description</label>
      <input type="text"
        name="description" placeholder="Description"
        value={description}
        onChange={onChange}
        className="form-control mb-2" />

      {/* <div>
        <label htmlFor="">Price</label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={onChange}
          className="form-control mb-2"
          required
        />
      </div> */}
      <button type="submit" className="btn btn-success mt-2">Add Category</button>
    </form>
  );
};

export default AddCategory;
