import React from "react";
import "./CartItems.css";

function CartItems({ cartItems }) {
  return (
    <div className="cart-items-container">
      <h2>Lista de compras</h2>
      {cartItems.length === 0 ? (
        <p className="empty-basket">Agrega productos a tu lista de compras</p>
      ) : (
        <>
          <ul className="products-cart-list">
            {cartItems.map((item, index) => (
              <li className="product-cart-item" key={index}>
                <div className="product-cart-item-superior">
                  <figure>
                    <img src={item.images[0]}></img>
                  </figure>
                  <div className="product-cart-data">
                    <h3 className="product-cart-name">{item.title}</h3>
                    <p className="product-cart-price">{item.price}</p>
                  </div>
                </div>
                <div className="product-cart-options">
                  <button className="options-sum-res">-</button>
                  <p>1</p>
                  <button className="options-sum-res">+</button>
                  <button className="options-borrar">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: </p>
        </>
      )}
    </div>
  );
}

export { CartItems };
