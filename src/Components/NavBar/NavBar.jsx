import React from 'react'
import "../NavBar/NavBar.css";
import logotipo from '../../logonike.svg'
import CartWidget from '../NavBar/CartWidget'
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/Context'
import { useContext } from 'react';



const NavBar = () => {

  const {cart} = useContext(cartContext)

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
          { cart.length > 0 ?
          <Link to="/cart">
            <CartWidget />
          </Link> : <div></div>}


        </header>

    </>
  )
}

export default NavBar;