import React from 'react'
import './Card.css'

const Card = (props) => {

  const pro = props.pro;
  const deleteProduct = props.deleteProduct;
  const editHandler = props.editHandler;


  return (
    <div className='card'>
        <h1>{pro.name}</h1>
        <p>{pro.description}</p>
        <p>{pro.category}</p>
        <button onClick={() => editHandler(pro)}>Edit</button>
        <button onClick={() => deleteProduct(pro.id)}>Delete</button>
    </div>
  )
}

export default Card