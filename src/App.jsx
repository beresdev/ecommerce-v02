import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  let productsCopy = [...products];

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  },[])

  //console.log(productsCopy)

  return (
    <>
    <h1>Hello world!</h1>
    </>
  )
}

export default App
