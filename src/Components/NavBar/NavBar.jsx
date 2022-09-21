import React from 'react'
import "../NavBar/NavBar.css";
import logotipo from '../../logonike.svg'
import CartWidget from '../NavBar/CartWidget'


const NavBar = () => {



  return (
    <>
        <header>
            <img src={logotipo} alt="logonike" className='logonike'/>
            <nav>
                <ul className='nav__links'>
                    <li><a href="#"> Inicio </a></li>
                    <li><a href="#"> Hombre </a></li>
                    <li><a href="#"> Mujer </a></li>
                    <li><a href="#"> Ropa </a></li>
                </ul>
                
            </nav>
            <CartWidget/>


        </header>

    </>
  )
}

export default NavBar;