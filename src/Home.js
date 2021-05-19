import React from 'react';
import './App.css';
import APIProduct from './APIProduct';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';



function Home() {
    return (
        <>
            <ProductList />
        </>
    );
}

export default Home;
