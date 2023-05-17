import './ProductDetails.css'

function ProductDetails(props) {
    return(
        <div className='Product-details-container'>
            <img src="" alt="" />
            <p>{props.product.title}</p>
            <span>icono share</span>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
            <button>Add to cart</button>
        </div>
    )
}

export { ProductDetails }