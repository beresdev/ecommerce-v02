import './ProduuctsList.css'

function ProductsList(props) {
    return(
      <ul className='products-container'>
        {props.children}
      </ul>
    );
}

export { ProductsList }