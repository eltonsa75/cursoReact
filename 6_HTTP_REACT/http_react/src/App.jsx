
import { useState, useEffect } from "react";
import './App.css'

// para checar erros, deixar URL vazia
const url = "http://localhost:3000/products";

function App() {
  //1 resgatando dados
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    getData();
  }, []);


  return (
   <div className='App'>
    <h1>Http React</h1>
    {/* 1 - Resgate de dados */}
    <ul>
      {products.map((products) => (
        <li key={products.id}>
          {products.name} - R${products.price}
        </li>
      ))}
    </ul>
   </div>
  )
}

export default App
