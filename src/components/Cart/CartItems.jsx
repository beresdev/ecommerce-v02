import React from "react";
import "./CartItems.css";

function CartItems({ cartItems }) {
  return (
    <div className="cart-items-container">
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { CartItems };
