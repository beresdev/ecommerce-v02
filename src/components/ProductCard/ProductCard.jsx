import "./ProductCard.css";
import { AiFillPlusCircle } from "react-icons/ai";

function ProductCard(props) {

  return (
    <div className="product-card-container" onClick={() => props.onProductClick(props.id)}>
      <div className="product-card">
        <figure className="product-image">
          <img src={props.img}></img>
        </figure>
        <div className="product-details">
          <p className="title">{props.title}</p>
          <p className="price">$ {props.price}</p>
        </div>
      </div>
      <AiFillPlusCircle className="addToCart-button" />
    </div>
  );
}

export { ProductCard };
