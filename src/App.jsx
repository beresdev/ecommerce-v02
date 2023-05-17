import { useEffect, useState } from "react";
import "./App.css";

import { CartItems } from "./components/Cart/CartItems";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Layout } from "./components/Layout/Layout";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  function handleProductClick(id) {
    const product = filteredProducts.find(p => p.id === id);
    setSelectedProduct(product);
  }

  const handleCloseProduct =() => {
    setSelectedProduct(null);
  }

  return (
    <>
      <Layout handleCartClick={handleCartClick} />
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <div>
        {selectedProduct && 
        <ProductDetails product={selectedProduct} onClose={handleCloseProduct}/>}
        <ProductsList>
          {
            filteredProducts.map(product => (
              <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.images[0]}
              price={product.price}
              addToCart={() => addToCart(product)}
              onProductClick={handleProductClick}
              />
            ))
          }
        </ProductsList>     
      </div>
      {showCart && <CartItems cartItems={cartItems} />}
    </>
  );
}

export default App;
