
import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';
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
            <Switch>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
                        Axcess <i className='fas fa-universal-access' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        
                        <div>
                        <div className='nav-item'>
                            <Link to='/upload' className='nav-links' onClick={closeMobileMenu}>
                                Upload
                            </Link>
                        </div>
                        </div>
                        <li className='nav-item'>
                            <Link to='/book' className='nav-links' onClick={closeMobileMenu}>
                                Book
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/upload' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Upload
                            </Link>
                        </li> */}
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign-Up</Button>}
                    
                </div>
            </nav>
            </Switch>
        </Router>
        </>
    )
}

export default Navbar
















