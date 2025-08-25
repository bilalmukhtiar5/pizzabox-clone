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
    try {
      const response = await axios.post(
        "http://localhost:5000/api/categories",
        formData
      );

      if (response.data.success) {
        setFormData({ name: "", description: "" });
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">➕ Add New Category</h3>

        <form onSubmit={onSubmit}>
          {/* Category Name */}
          <div className="mb-3">
            <label className="form-label">Category Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              value={name}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={onChange}
              className="form-control"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
