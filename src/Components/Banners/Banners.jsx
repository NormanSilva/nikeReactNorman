import React from 'react'
import "./Banners.css"
import { Link } from 'react-router-dom';

const Banners = () => {
  return (
    <div>
        <div className='displayBannersUno'>
          <Link target="_blank" to="nike.com/us/es/w/nuevos-lanzamientos-3n82y">
            <p className='NikeRunningFP'>NIKE RUNNING FAST PACK</p>
          </Link>
        </div>
        
        <div className='displayBannersDos'>
          <Link target="_blank" to="https://www.nike.com/us/es/w/hombres-air-max-calzado-a6d8hznik1zy7ok">
            <p className='NikeAirForce1'>Nike Air Force 1</p>
          </Link>
          <Link target="_blank" to="https://www.nike.com/us/es/w/hombres-estilo-de-vida-calzado-13jrmznik1zy7ok">
            <p className='AirMax98'>Air Max 98Barcelona</p>
          </Link>
        </div>
    </div>
   
    
  )
}

export default Banners
