import React, { useState } from 'react'

const ProductForm = (props) => {

    const setShowForm = props.setShowForm;

    const [formData, setFormData] = useState({
        name:"",description:"",category:"",price:"",stockQuantity:""
    });

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev,[name]:
            name === "price" || name === "stockQuantity"
            ? Number(value)
            : value}));
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     // setFormData("");     works fine but it is an object not a string
    //     setFormData({
    //         name:"",
    //         description:"",
    //         category:"",
    //         price:"",
    //         stockQuantity:""
    //     })
    //     setShowForm(false);
    // }



    const submitHandler = async(e) => {
        try{
            e.preventDefault();

            const response = await fetch("http://localhost:8080/api/products", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log(data);
            // setFormData("");     works fine but it is an object not a string
            setFormData({
                name:"",
                description:"",
                category:"",
                price:0,
                stockQuantity:0
            })
            setShowForm(false);
        }
        catch(error){
            console.log(error);
        }
    }




  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Enter Product name:</p>
            <input
                type='text'
                onChange={changeHandler}
                value={formData.name}
                name='name'
                placeholder='Enter Product Name'
            />
        </label>

        <br/>

        <label>
            <p>Enter Product Description:</p>
            <input
                type='text'
                onChange={changeHandler}
                value={formData.description}
                name='description'
                placeholder='Enter Product Description'
            />
        </label>

        <br/>

        <label>
            <p>Enter Product Category:</p>
            <input
                type='text'
                onChange={changeHandler}
                value={formData.category}
                name='category'
                placeholder='Enter Product Category'
            />
        </label>

        <br/>

        <label>
            <p>Enter Product Price:</p>
            <input
                type='number'
                onChange={changeHandler}
                value={formData.price}
                name='price'
                placeholder='Enter Product Price'
            />
        </label>

        <br/>

        <label>
            <p>Enter Product Quantity:</p>
            <input
                type='number'
                onChange={changeHandler}
                value={formData.stockQuantity}
                name='stockQuantity'
                placeholder='Enter Product Quantity'
            />
        </label>

        <button>Submit</button>
    </form>
  )
}

export default ProductForm