import React from "react";
import "./CartItems.css";

function CartItems({ cartItems }) {
  const [productQuantities, setProductQuantities] = React.useState(
    cartItems.map(() => 1)
  );

  const handleIncrement = (index) => {
    const newQuantities = [...productQuantities];
    newQuantities[index] += 1;
    setProductQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...productQuantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setProductQuantities(newQuantities);
    }
  };

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
                    <img src={item.images[0]} alt="" />
                  </figure>
                  <div className="product-cart-data">
                    <h3 className="product-cart-name">{item.title}</h3>
                    <p className="product-cart-price">$ {item.price}</p>
                  </div>
                </div>
                <div className="product-cart-options">
                  <button
                    onClick={() => handleDecrement(index)}
                    className="options-sum-res"
                  >
                    -
                  </button>
                  <p>{productQuantities[index]}</p>
                  <button
                    onClick={() => handleIncrement(index)}
                    className="options-sum-res"
                  >
                    +
                  </button>
                  <button className="options-borrar">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total">Total: $ </p>
          <button className="action-cart-button">Inicia sesión</button>
        </>
      )}
    </div>
  );
}

export { CartItems };
