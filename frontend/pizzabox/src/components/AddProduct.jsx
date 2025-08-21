import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from backend
    axios.get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", { name, price, description, category });
      alert("Product added successfully!");
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
    } catch (error) {
      alert("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border m-2">
      <h4>Add Product</h4>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="form-control mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      ></textarea>

      <select value={category} onChange={(e) => setCategory(e.target.value)} required className="form-control mb-2">
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>

      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  );
};

export default AddProduct;
