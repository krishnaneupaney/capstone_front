import React from 'react'
import APIProduct from '../APIProduct';
import {useCookies} from 'react-cookie';

function ProductList(props) {

  const [token] = useCookies(['mytoken'])

    const editBtn = (product) =>{
        props.editBtn(product)
    }

    const deleteBtn = (product) => {
      APIProduct.DeleteProduct(product.id, token['mytoken'])
      .then(() => props.deleteBtn(product))
      .catch(error => console.log(error))
  
    }

    return (
        <div>
            
        {props.products && props.products.map(product => {
          return (
            <div key = {product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.product_image}</p>
              <p>{product.price}</p>

            <div className = "row">
            <div className = "col-md-1">
            <button className = "btn btn-primary" onClick = {() => editBtn(product)}>Update</button>    
            </div>   

            <div className = "col">
            <button onClick = {() =>deleteBtn(product)} className = "btn btn-danger">Delete</button>    
            </div>      
            </div>
              
            <hr className = "hrclass"/>  
            </div>
          )
        })}

        </div>
    )
}

export default ProductList;
