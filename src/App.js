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
// import Upload from './components/Upload';


function App() {
// const [books, setBooks] = useState(null);

//   const fetchData = async () => {
//     const response = await axios.get(
//       'https://www.anapioficeandfire.com/api/books?pageSize=300'
//     );

//     setBooks(response.data);
//   };



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
    }  )
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [upload_image, setUploadImage] = useState("")
  const [price, setPrice] = useState("")


  return (   
    <> 
   
    {/* <Switch>
      <BookApi />
      <Route path='/book' exact component={BookApi} />
    </Switch> */}

    <div className="navbar">
     {/* <BookApi /> */}
     {/* <div className="lmao">
       <Upload />
     </div>
  */}
    <div className = "row">
      <div className = "col">
        <br />
        <br />
       
      <div className = "col">
      {/* <img src={product_image} alt="" id="img" className="img" /> */}
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

      <div className="footer">
        <Footer />
      </div>

    </div>
    </>

  );
}

export default App;