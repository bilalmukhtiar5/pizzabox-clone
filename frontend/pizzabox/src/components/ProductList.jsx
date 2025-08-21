import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-3">
      <h4>Product List</h4>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product._id} className="list-group-item">
            <strong>{product.name}</strong> - Rs {product.price}
            <br />
            <small>Category: {product.category?.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
