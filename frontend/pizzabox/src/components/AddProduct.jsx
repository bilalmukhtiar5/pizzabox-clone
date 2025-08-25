import React, { useEffect, useState } from "react";
import axios from "axios";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  // Fetch categories for dropdown
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", form);
      alert("✅ Product added successfully!");
      setForm({ name: "", price: "", category: "" }); // reset form
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">➕ Add New Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (PKR)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
