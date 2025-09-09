import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null); // ✅ single file
  const [preview, setPreview] = useState(null); // ✅ single preview

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load categories");
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !category) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      if (image) {
        formData.append("image", image); // ✅ send file
      }

      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      toast.error("❌ Error adding product");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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

        {/* File Upload */}
        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Preview */}
        {preview && (
          <div className="mb-3">
            <img
              src={preview}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddProduct;
