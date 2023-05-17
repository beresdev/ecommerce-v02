import { ImageSlider } from "./ImageSlider";
import "./ProductDetails.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShareAlt } from 'react-icons/fa';

function ProductDetails(props) {
  const handleCloseClick = () => {
    props.onClose();
  }

  return (
    <div className="product-details-container">
      <AiFillCloseCircle className="close-button" onClick={handleCloseClick}/>
      <div className="images-container">
        <ImageSlider images={props.product.images} />
      </div>
      <div className="name_share_price-container">
        <div className="name-share">
            <p className="product-title">{props.product.title}</p>
            <FaShareAlt className="share-icon"/>
        </div>
        <p className="product-price">$ {props.product.price}</p>
      </div>
      <p className="product-description">{props.product.description}</p>
      <button className="add-to-cart-button">Add to cart</button>
    </div>
  );
}

export { ProductDetails };
