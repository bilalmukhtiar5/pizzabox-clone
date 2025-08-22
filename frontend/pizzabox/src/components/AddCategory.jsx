import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/categories", { name, description });
      toast.success("Category added successfully!");
      setName("");
      setDescription("");
    } catch (error) {
      toast.error("Error adding category");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border m-2 rounded shadow-sm">
      <h4>Add Category</h4>
      <input 
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input 
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-success">Add Category</button>
    </form>
  );
};

export default AddCategory;
