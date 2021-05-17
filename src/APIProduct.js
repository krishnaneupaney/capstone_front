export default class APIProduct {
    
    static UpdateProduct(product_id, body, token){

        return fetch(`http://127.0.0.1:8000/capstoneapi/products/${product_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
        }, 
        body: JSON.stringify(body)
    }).then(resp => resp.json())

    }

    static AddProduct (body, token) {
        return fetch('http://127.0.0.1:8000/capstoneapi/products/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteProduct(product_id, token) {
        return fetch(`http://127.0.0.1:8000/capstoneapi/products/${product_id}`, {
            'method': 'DELETE',
            Headers: {
                'Content-Type': 'application/json',
                'Authorization':  `Token ${token}`
        }, 
    }) 
    }

//     static LoginUser (body) {
//         return fetch('http://127.0.0.1:8000/auth/', {
//             'method': 'GET',
//             headers: {
//                 'Content-Type': 'application/json',        
//             }, 
//         body: JSON.stringify(body)
//         }).then(resp => resp.json())
//     }

//     static RegisterUser (body) {
//         return fetch('http://127.0.0.1:8000/capstoneapi/users/', {
//             'method': 'POST',
//             headers: {
//                 'Content-Type': 'application/json',        
//             }, 
//         body: JSON.stringify(body)
//         }).then(resp => resp.json())
//     }
}