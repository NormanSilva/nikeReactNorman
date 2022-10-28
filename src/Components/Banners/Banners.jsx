import React from 'react'
import "./Banners.css"


const Banners = () => {
  return (
    <div>
        <div className='displayBannersUno'>
          <a target="_blank" href="https://www.nike.com/us/es/w/nuevos-lanzamientos-3n82y" rel="noreferrer">
            <p className='NikeRunningFP'>NIKE RUNNING FAST PACK</p>
          </a>
        </div>
        
        <div className='displayBannersDos'>
          <a target="_blank" href="https://www.nike.com/us/es/w/hombres-air-max-calzado-a6d8hznik1zy7ok" rel="noreferrer">
            <p className='NikeAirForce1'>Nike Air Force 1</p>
          </a>
          <a target="_blank" href="https://www.nike.com/us/es/w/hombres-estilo-de-vida-calzado-13jrmznik1zy7ok" rel="noreferrer">
            <p className='AirMax98'>Air Max 98Barcelona</p>
          </a>
        </div>
    </div>
   
    
  )
}

export default Banners
