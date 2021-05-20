import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import {CookiesProvider} from 'react-cookie';
import Navbar from './components/Navbar';
import BookApi from './components/BookApi';
import Upload from './components/Upload'
import SignUp from './components/SignUpForm';
import SignUpContainer from './components/SignUpContainer';


function Router(){
  return(
    <CookiesProvider>
    <BrowserRouter>    
    <Navbar />
    <Switch>
    <Route exact path = '/' component = {Login} />  
    {/* <Route exact path = '/upload' component = {Upload} /> 
    <Route exact path = '/book' component = {BookApi} />
    <Route exact path = "/signup" component = {SignUpContainer} /> */}
    <Route exact path = "/products" component = {App} />
    </Switch>
    </BrowserRouter>
    </CookiesProvider>
  )
}



ReactDOM.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();