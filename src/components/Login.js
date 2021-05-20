import React, {useState, useEffect} from 'react';
import APIProduct from '../APIProduct';
import {useCookies} from 'react-cookie';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']){
            history.push('/products')
            // window.location.href = '/'
        }
        //eslint-disable-next-line
    }, [token])
    
const loginBtn = () => {
    APIProduct.LoginUser({username, password})
    .then(resp => setToken('mytoken',resp.token))
    .catch(error => console.log(error))
}
const RegisterBtn = () => {
    APIProduct.RegisterUser({username, password})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))

}
    return (
        <div className = "App">
           {isLogin ? <h1>Please Login</h1> : <h1>Please Register </h1>}
                <br />
                <br />
            <div className = "mb-3">
            <label htmlFor = "username" className = "form-label">Username</label>
            <input type = "text" className = "form-control" id = "username" placeholder = "enter " 
            value = {username} onChange = {e => setUsername(e.target.value)}
            />
            </div>

            <div className = "mb-3">
            <label htmlFor = "password" className = "form-label">Password</label>
            <input type = "password" className = "form-control" id = "password" placeholder = "enter password" 
            value = {password} onChange = {e => setPassword(e.target.value)}
            />
            </div> 
             {isLogin ? <button onClick = {loginBtn} className = "btn btn-primary">Login</button>
            : <button onClick = {RegisterBtn} className = "btn btn-primary">Register</button> 
        }
            <div className = "mb-3">
                <br />
                {isLogin ? <h5>If no account, plz <button className = "btn btn-primary" onClick = {() => setLogin(false)}>Register</button>Here</h5>
               :  <h5>if you've account, than <button className = "btn btn-primary" onClick = {() => setLogin(true)}>Login</button></h5> 
            }
        </div>
        </div>   
        
    )
}

export default Login;
