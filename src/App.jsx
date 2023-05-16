import { useEffect, useState } from "react";
import "./App.css";

import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { SearchBar } from './components/SearchBar/SearchBar';
import { Layout } from "./components/Layout/Layout";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <>
      <Layout />
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <ProductsList>
        {
          filteredProducts.map(product => (
            <ProductCard 
            key={product.id}
            title={product.title}
            img={product.images[0]}
            price={product.price}
            />
          ))
        }
      </ProductsList>
    </>
  )
}

export default App;
