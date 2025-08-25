import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

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
      await axios.put(
        `http://localhost:5000/api/categories/${editingCategory}`,
        { name, description }
      );
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
    <div className="container py-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">📂 Category List</h4>
          <span className="badge bg-light text-dark">
            Total: {categories.length}
          </span>
        </div>

        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Category Name</th>
                <th>Description</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat._id}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>{cat.description}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(cat)}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(cat._id)}
                    >
                      <MdDelete /> Delete
                    </button>
                  </td>
                </tr>
              ))}

              {categories.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Edit Form */}
          {editingCategory && (
            <div className="mt-4 p-3 border rounded bg-light">
              <h5>Edit Category</h5>
              <form onSubmit={handleUpdate}>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                  />
                </div>
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
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CategoryList;
