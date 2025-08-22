import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch categories
  const fetchCategories = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCategories(res.data); // 👈 no .categories
  } catch (error) {
    toast.error("Error fetching categories");
  }
};

  // Run once on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Delete category
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      toast.success("Category deleted!");
      fetchCategories();
    } catch (error) {
      toast.error("Error deleting category");
    }
  };

  // Start editing
  const handleEdit = (category) => {
    setEditingCategory(category._id);
    setName(category.name);
    setDescription(category.description);
  };

  // Update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/categories/${editingCategory}`, {
        name,
        description,
      });
      toast.success("Category updated!");
      setEditingCategory(null);
      setName("");
      setDescription("");
      fetchCategories();
    } catch (error) {
      toast.error("Error updating category");
    }
  };

  return (
    <div className="p-3 border m-2">
      <h4>Category List</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={cat._id}>
              <td>{index + 1}</td>
              <td>{cat.name}</td>
              <td>{cat.description}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(cat)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cat._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
      {editingCategory && (
        <form onSubmit={handleUpdate} className="p-3 border mt-3">
          <h5>Edit Category</h5>
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
          <button type="submit" className="btn btn-success me-2">
            Update
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setEditingCategory(null)}
          >
            Cancel
          </button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
};

export default CategoryList;
