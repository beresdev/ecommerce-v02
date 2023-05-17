import { useEffect, useState } from "react";
import "./App.css";

import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { SearchBar } from './components/SearchBar/SearchBar';
import { Layout } from "./components/Layout/Layout";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
      setFilteredProducts(data.products);
     });
  },[])

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  }

  function handleProductClick(id) {
    const product = filteredProducts.find(p => p.id === id);
    setSelectedProduct(product);
  }

  console.log(selectedProduct);

  return (
    <>
      <Layout />
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <div>
        {selectedProduct && 
        <ProductDetails product={selectedProduct}/>}
        <ProductsList>
          {
            filteredProducts.map(product => (
              <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.images[0]}
              price={product.price}
              onProductClick={handleProductClick}
              />
            ))
          }
        </ProductsList>
      </div>
    </>
  )
}

export default App;
