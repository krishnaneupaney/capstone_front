import React, { useState, useEffect } from 'react';
import APIProduct from '../APIProduct';
import {useCookies} from 'react-cookie';

function Form(props) {
    const [title, setTitle] = useState(props.product.title)
    const [description, setDescription] = useState(props.product.description)
    const [upload_image, setUpload_Image] = useState(props.product.upload_image)
    const [price, setPrice] = useState(props.product.price)
    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        setTitle(props.product.title)
        setDescription(props.product.description)
        setUpload_Image(props.product.setUpload_Image)
        setPrice(props.product.setPrice) 
    }, [props.product])

    const updateProduct = () => {
        APIProduct.UpdateProduct(props.product.id, {title, description, upload_image, price}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))
    }

    const addProduct = () => {
        APIProduct.AddProduct({title, description, upload_image, price}, token['mytoken'])
        .then(resp => props.addedInformation(resp))
    }

    return (
        <div>
            {props.product ? (
                
                <div className = "mb-3">
                <label htmlFor = "title" className = "form-label">Title</label>
                <input type="text" className = "form-control" id="title" placeholder = "enter your shit" 
                value = {title} onChange = {e => setTitle(e.target.value)}
                />
                <label htmlFor = "description" className = "form-label">Description</label>
               
                <textarea className = "form-control" id="description" rows="5"
                value = {description} onChange = {e => setDescription(e.target.value)}
                />
                <br />
                <input type="file" className = 'form-control' id="image"
                value = {upload_image} onChange = {e => setUpload_Image(e.target.value)} /> 
                <br />
                <input type="number" className= "form-label" placeholder="enter your price"
                value = {price} onChange = {e => setPrice(e.target.value)}/>
                <br />
                {props.product.id ? <button onClick = {updateProduct} className = "btn btn-success">Update Product</button> : 
                <button onClick = {addProduct} className = "btn btn-success">Add Product</button>


                }
                
                </div>

            ) : null }

        </div>
    )
}

export default Form
