import React from 'react'
import APIProduct from '../APIProduct';
import {useCookies} from 'react-cookie';
import { useParams } from 'react-router-dom'
// import Loader from '../components/Loader'
// import { useAxiosGet } from '../Hooks/HttpRequests'


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
      // <div className="container mx-auto">
      //       {content}
        <div>
            
        {props.products && props.products.map(product => {
          return (
            <div key = {product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <img src="{{ product.product_image}} "/>
              <p>{product.price}</p>

            <div className = "row">
            <div className = "col-md-1">
            <button className = "btn btn-primary" onClick = {() => editBtn(product)}>Edit</button>    
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
        // </div>
    )
}

export default ProductList;
