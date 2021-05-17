
import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);    

    window.addEventListener('resize', showButton);


    return (
        <>
        <Router>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
                        Axcess <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/book' className='nav-links' onClick={closeMobileMenu}>
                                Upload
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Book
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Upload
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    
                </div>
            </nav>
            </Router>
        </>
    )
}

export default Navbar















// import React, {useContext} from 'react'
// import { Container, Anchor, Icon } from 'atomize';
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../context/shopContext'

// const Navbar = () => {

//     const { openCart } = useContext(ShopContext)

//     return (
//         <>  
//             <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
//                 <Link to="/"><Icon name="Store" size="50px" color="DarkBlue" />Shop</Link>
//                 <Link to="/products"><h1>Home</h1></Link>
//                     <h1>Axcess Nutrition</h1>
//                     <nav><Link to="/blogs" name="blogs"size="9px"><h1>Blogs</h1></Link></nav>
//                  <nav>
//                  <Anchor onClick={() => openCart()}><Icon name="Bag" size="50px"  color="RedBlue" /></Anchor>
//                  <input type="text" placeholder="Search products.." name="search"></input>
//                  <button type="submit"><i color="red" class="fa fa-search"></i></button>
//                  </nav>
                 
   
               
//             </Container>
//         </>
//     )
// }

// export default Navbar