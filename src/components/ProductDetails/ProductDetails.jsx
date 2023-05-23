import { ImageSlider } from "./ImageSlider";
import "./ProductDetails.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShareAlt } from 'react-icons/fa';
import { SocialMediaList } from "./SocialMediaList";
import { useState } from "react";

function ProductDetails(props) {

  const [showList, setShowList] = useState(false)
  const handleCloseClick = () => {
    props.onClose();
  }

  function shareOptions() {
    setShowList(!showList);
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
            <FaShareAlt className="share-icon" onClick={shareOptions}/>
             {showList && <SocialMediaList isVisible={showList} />} {/* SocialMediaList component is rendered if showList is true */}
        </div>
        <p className="product-price">$ {props.product.price}</p>
      </div>
      <p className="product-description">{props.product.description}</p>
      <button className="add-to-cart-button" onClick={props.addToCart}>Add to cart</button>
    </div>
  );
}

export { ProductDetails };
