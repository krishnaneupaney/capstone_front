// export default class BookList {
    
//     static UpdateBook(product_id, body, token){

//         return fetch(`https://www.anapioficeandfire.com/api/books?pageSize=300/${book_id}/`, {
//             'method': 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Token ${token}`
//         }, 
//         body: JSON.stringify(body)
//     }).then(resp => resp.json())

//     }

//     static AddProduct (body, token) {
//         return fetch('http://127.0.0.1:8000/https://www.anapioficeandfire.com/api/books?pageSize=300/', {
//             'method': 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Token ${token}`
//         }, 
//         body: JSON.stringify(body)
//         }).then(resp => resp.json())
//     }

//     static DeleteProduct(product_id, token) {
//         return fetch(`https://www.anapioficeandfire.com/api/books?pageSize=300/${book_id}`, {
//             'method': 'DELETE',
//             Headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization':  `Token ${token}`
//         }, 
//     }) 
//     }
// }