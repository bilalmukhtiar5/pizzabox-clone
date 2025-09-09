import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const userId = "68abc12345..."; // TODO: Replace with real user id

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!cart) return <p>Loading...</p>;

  const total = cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h3>🛒 Your Cart</h3>
      {cart.items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => (
              <tr key={item.product._id}>
                <td>{item.product.name}</td>
                <td>Rs.{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>Rs.{item.product.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h4 className="mt-3">Grand Total: Rs.{total}</h4>
    </div>
  );
};

export default Cart;
