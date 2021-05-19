import './App.css';
import {useState, useEffect, Component} from 'react'
import ProductList from './components/ProductList';
import Form from './components/Form';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import BookApi from './components/BookApi';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage'
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Upload from './components/Upload';
// import firebase from 'firebase/app';
import Home from './Home';
import SignUpContainer from './components/SignUpContainer';
import APIProduct from './APIProduct';
import SignUp from './components/SignUpForm';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


function App() {

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
        // history.push('/')
        window.location.href = '/'
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

  const logoutBtn = () => {
    removeToken(['mytoken'])
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [upload_image, setUploadImage] = useState("")
  const [price, setPrice] = useState("")

 const reader = new FileReader();
  return (   
    <> 
   
   <Router>
    <Switch>
      {/* <Route path='/' exact component={Login} /> */}
      {/* <Route path='/upload' component={Upload} />
      <Route path='/products' component={BookApi} />
      <Route path='/signup' component={SignUp} /> */}
        <MuiThemeProvider>
        {/* <SignUpContainer /> */}
        <ProductList />
        </MuiThemeProvider>
       
      
    </Switch>
    </Router>


    <div className="app">
    <div className = "row">
      <div className = "col">
        <br /> 
        <div className = "col-shit">
        <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
      </div>
        <br />
        <div className = "col">
        <button onClick = {productForm} className = "btn btn-primary">Add Product</button>
      </div>

     

        </div>
        </div>

        <ProductList products = {products} editBtn = {editBtn} deleteBtn = {deleteBtn} />

        {editProduct ? <Form product = {editProduct} updatedInformation = {updatedInformation} addedInformation = {addedInformation} /> : null}
        {/* <Form product = {editProduct} /> */}
      <BookApi />
      <div className="footer">
        <Footer />
      </div>

    </div>
    </>

  );
}

export default App;