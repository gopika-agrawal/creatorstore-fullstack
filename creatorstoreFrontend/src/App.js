import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import ProductForm from './components/ProductForm';

function App() {

  const [product, setProduct] = useState([]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
    try{
      const response = await fetch("http://localhost:8080/api/products");
      const data = await response.json();
      setProduct(data);
      
    }
    catch(error){
      console.log(error);
    }
  }
  fetchData();
  },[showForm]);


  const deleteProduct = async(delId) => {
    try{
      fetch(`http://localhost:8080/api/products/${delId}`,
        {
          method: "DELETE"
        }
      );

      setProduct((prev) => 
        prev.filter((pr) => pr.id !== delId)
      );
    }
    catch(error){
      console.log(error);
    }
  }


  const clickHandler = () => {
    setShowForm(true);
  }

  return (
    <div className="App">
        <div className='container'>
          <h1>Products:-</h1>
            { product &&
              product.map((pro) => (
                <div key={pro.id}>
                  <Card pro={pro} deleteProduct={deleteProduct}/>
                </div>
              ))
            }
        </div>
        <div>
          {
            showForm ? 
            <ProductForm setShowForm={setShowForm}/> :
            <button onClick={clickHandler} className='formShow'>show</button>
          }
        </div>
    </div>
  );
}

export default App;
