import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", category: "" });

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Error fetching products");
    }
  };

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Error fetching categories");
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // Delete Product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      toast.success("Product Deleted!");
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Error deleting Product");
    }
  };

  // Start Editing
  const startEdit = (product) => {
    setEditingProduct(product._id);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category?._id || ""
    });
  };

  // Save Edit
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${editingProduct}`, formData);
      toast.success("Product Updated!");
      setEditingProduct(null);
      setFormData({ name: "", price: "", category: "" });
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Error editing Product");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Products List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>Rs. {product.price}</td>
                <td>{product.category?.name || "No Category"}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => startEdit(product)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(product._id)}
                  >
                    <MdDelete /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Form */}
      {editingProduct && (
        <form onSubmit={handleEdit} className="border p-3 mt-4">
          <h5>Edit Product</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />

          {/* Category Dropdown */}
          <select
            className="form-select mb-2"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <button type="submit" className="btn btn-success me-2">Save</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setEditingProduct(null)}
          >
            Cancel
          </button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProductList;
