import "/product-styles.css"
import { AiFillPlusCircle } from "react-icons/ai"
function ProductCard(props) {
    return(
        <div class = "product-card ">
                <AiFillPlusCircle class = "plus"/>
                <div class="product-image">
                    <img src={props.img}></img>
                    <div class="product-details">
                    <p class="tittle">{props.title}</p>
                    <p class="tittle">$ {props.price}</p> 
                    </div>
            </div>
        </div>
    )
}

export { ProductCard }