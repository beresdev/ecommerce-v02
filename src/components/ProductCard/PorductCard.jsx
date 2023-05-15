function ProductCard(props) {
    return(
        <div>
            <span>+</span>
            <img src={props.img}></img>
            <p>{props.title}</p>
            <p>$ {props.price}</p>
        </div>
    )
}

export { ProductCard }