
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// // import ScotchInfoBar from './ScotchInfoBar';
// // import './styles.css';

// function App() {
//   const [books, setBooks] = useState(null);

//   const fetchData = async () => {
//     const response = await axios.get(
//       'https://www.anapioficeandfire.com/api/books?pageSize=30'
//     );

//     setBooks(response.data);
//   };

//   return (
//     <div className="App">
//       <h1>Game of Thrones Books</h1>
//       <h2>Fetch a list from an API and display it</h2>

//       {/* Fetch data from API */}
//       <div>
//         <button className="fetch-button" onClick={fetchData}>
//           Fetch Data
//         </button>
//         <br />
//       </div>

//       {/* Display data from API */}
//       <div className="books">
//         {books &&
//           books.map((book, index) => {
//             const cleanedDate = new Date(book.released).toDateString();
//             const authors = book.authors.join(', ');

//             return (
//               <div className="book" key={index}>
//                 <h3>Book {index + 1}</h3>
//                 <h2>{book.name}</h2>

//                 <div className="details">
//                   <p>👨: {authors}</p>
//                   <p>📖: {book.numberOfPages} pages</p>
//                   <p>🏘️: {book.country}</p>
//                   <p>⏰: {cleanedDate}</p>
//                 </div>
//               </div>
//             );
//           })}
//       </div>

//       {/* <ScotchInfoBar seriesNumber="7" /> */}
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

// export default App;


































// // import React, { useEffect, useContext, useState } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { ShopContext } from '../context/shopContext'
// // import { Text, Div, Button, Row, Col, Container } from 'atomize'
// // import { NoSchemaIntrospectionCustomRule } from 'graphql'


// // const ProductPage = () => {
// //     let { id } = useParams();
// //     const { fetchProductWithId, addItemToCheckout, product, openCart} = useContext(ShopContext)
// //     const [count, setCount ] = useState(1)
// //     // const [product, setProduct] = useState(null)
// //     // async function fetchData() {
// //     //     const fetchedProduct = await fetchProductWithId(id)
// //     //     setProduct(fetchedProduct)
// //     // }
// //     function decrementCount() {
// //         setCount(prevCount => prevCount - 1)
// //     }

// //     function incrementCount() {
// //         setCount(prevCount => prevCount + 1)
// //     }

// //     useEffect(() => {
// //         fetchProductWithId(id)

        
// //         // fetchData()
// //         return () => {
// //             // setProduct(null)
// //         };
// //     }, [ fetchProductWithId, id])
    
   
   

// //     // if (!product.title) return <div>Loading...</div>
// //     return (
// //         <Container>
// //             <Row m={{ b: "2rem" }} p="2rem">
// //                 <Col>
// //                     <Div bgImg={product.images[0].src} cover="100%" shadow="3" bgSize="cover" w="100%" h="100%" bgPos="center center" h="40rem"/>
// //                 </Col>
// //                 <Col>
// //                     <Text tag="h1" textColor="darkgreen" textWeight="450" m={{ y: '2rem' }}>{product.title}</Text>
// //                     <Text tag="h3" m={{ y: '2rem' }} textWeight="200">${product.variants[0].price}</Text>
// //                     <Text tag="p" textSize="paragraph" textColor="black" textWeight="200">{product.description}</Text>
// //                     <Button rounded="0" shadow="3" bg="gray" m={{ y: '2rem' }} onClick={() => {
// //                      addItemToCheckout(product.variants[0].id, 1)
// //                      openCart()
// //                     }}>
// //                      Add To Cart
// //                 </Button>
// //                 <nav>
// //                 <button onClick={decrementCount}>-</button>
// //                 <span>{count}</span>
// //                 <button onClick={incrementCount} >+</button>
// //                 </nav>
// //                 </Col>
// //             </Row>
// //         </Container>
// //     )
// // }

// // export default ProductPage
