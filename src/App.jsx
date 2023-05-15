import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { ProductCard } from "./components/ProductCard/PorductCard";
import { Layout } from "./components/Layout/Layout";
import { routes } from "./utils/routes";

function App() {
  const [products, setProducts] = useState([]);

  let productsCopy = [...products];

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  //console.log(productsCopy)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Layout /> */}
        <Route
          index
          path={routes.PRODUCTS}
          element={
            <ProductsList>
              {productsCopy.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  img={product.images[0]}
                  price={product.price}
                />
              ))}
            </ProductsList>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
