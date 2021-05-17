// import React, { createContext, useContext, useEffect }  from 'react'
// import { ShopContext } from '../context/shopContext'
// import { Text, Div, Row, Col, Container } from "atomize";
// import { Link } from 'react-router-dom'
// // import Loading from '../Loading'

// // export const ShopContextProvider = createContext();

// const HomePage = () => {
//     const {fetchAllProducts, products} = ShopContext

//     useEffect(() => {
//         fetchAllProducts()
//         return () => {
//             // cleanup
//         };
//     }, [fetchAllProducts])

//     // if (!products) return <Loading />
//     return (
//         <Container>
//             <Row>
//                 {products.map(product => (
//                     <Col key={product.id} size="3" >
//                         <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
//                             <Div p="2rem">
//                                 <Div 
//                                     h="20rem"
//                                     bgImg={product.images[0].src}
//                                     bgSize="cover"
//                                     bgPos="center center"
//                                     shadow="3"
//                                     hoverShadow="4"
//                                     transition="0.3s"
//                                     m={{ b: "1.5rem" }}
//                                     >
//                                 </Div>
//                                 <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
//                                 <Text tag="h2" textWeight="300" textSize="bold" textDecor="none" textColor="black">${product.variants[0].price}</Text>
//                             </Div>
//                         </Link>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     )
// }

// // function openForm() {
// //     document.getElementById("myForm").style.display = "block";
// //   }
  
// //   function closeForm() {
// //     document.getElementById("myForm").style.display = "none";
// //   }  

// export default HomePage


