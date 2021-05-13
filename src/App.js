import './App.css';
import {useState, useEffect} from 'react'
import ProductList from './components/ProductList';
import Form from './components/Form';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';


function App() {
//   fileSelectedHandler = event => {
//     console.log(event.target)
// }
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])

  let history = useHistory();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/capstoneapi/products/', {
      'method': "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Token ${token['mytoken']}`
      }
    })
    .then(resp => resp.json())
    .then(resp => setProducts(resp))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if(!token['mytoken']){
        history.push('/')
        // window.location.href = '/'
    }
}, [token])

  const editBtn = (product) => {
        setEditProduct(product)
}
  const updatedInformation = (product) => {
    const new_product = products.map(myproduct => {
      if(myproduct.id === product.id) {
        return product;
      }  else {
        return myproduct;
      }
    }) 
    setProducts(new_product)
  }
   
  
  const productForm = () => {
    setEditProduct({title: '', description:'', upload_image:'', price:''})
  }

  const addedInformation = (product) => {
    const new_products = [...products, product ]
    setProducts(new_products)
  }

  const deleteBtn = (product) => {
    const new_products = products.filter(myproduct => {
      if(myproduct.id === product.id) {
        return false
      }
      return true;
    })
    setProducts(new_products)
  }

  // const logoutBtn = () => {
  //   removeToken(['mytoken'])
  // }
  return (
    <div className="App">

      <div className = "row">
      <div className = "col">
        <br />
        <h3> Axcess Products and Services </h3>
        <br />

      <div className = "col">
        <button onClick = {productForm} className = "btn btn-primary">Add Product</button>
      </div>

      {/* <div className = "col">
        <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
      </div> */}

        </div>
        </div>

        <ProductList products = {products} editBtn = {editBtn} deleteBtn = {deleteBtn} />

        {editProduct ? <Form product = {editProduct} updatedInformation = {updatedInformation} addedInformation = {addedInformation} /> : null}
        {/* <Form product = {editProduct} /> */}
        {/* <input type="file" onChange={this.fileSelectedHandler} />  */}

    </div>
  );

}
export default App;
