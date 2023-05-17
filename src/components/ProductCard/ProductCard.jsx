import "./ProductCard.css";
import { AiFillPlusCircle } from "react-icons/ai";

function ProductCard(props) {

  const handleAddToCart = () => {
    props.addToCart();
  };

  return (
    <div className="product-card-container" >
      <div className="product-card">
        <figure className="product-image">
          <img src={props.img}></img>
        </figure>
        <div className="product-details" onClick={() => props.onProductClick(props.id)}>
          <p className="title">{props.title}</p>
          <p className="price">$ {props.price}</p>
        </div>
      </div>
      <AiFillPlusCircle
        className="addToCart-button"
        onClick={handleAddToCart}
      />
    </div>
  );
}

export { ProductCard };
