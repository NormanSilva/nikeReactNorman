import React from 'react'
import "../NavBar/NavBar.css";
import logotipo from '../../logonike.svg'
import CartWidget from '../NavBar/CartWidget'
import { Link } from 'react-router-dom';


const NavBar = () => {



  return (
    <>
        <header>
          <Link to="/"><img src={logotipo} alt="logonike" className='logonike'/></Link>
          <nav>
            <ul className='nav__links'>
              <li><Link to="/category/Air Max"> Air Max </Link></li>
              <li><Link to="/category/Terrascape"> Terrascape </Link></li>
              <li><Link to="/category/Vapor Max"> Vapor Max </Link></li>
            </ul>
                
          </nav>
          <Link to="/cart">
            <CartWidget/>
          </Link>


        </header>

    </>
  )
}

export default NavBar;