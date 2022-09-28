import React from 'react'
import "./Hero.css"

const Hero = () => {

  return (
    <div className='HeroContainer'>
        <div>
            <img src="../img/imghero.png" alt="heroimagen"/>
        </div>
        <div className='shoeHero'>
          <div>Nike Air Max Plus 1</div>
          <div className='nikeHero'><img src="../img/nikehero.png" alt="nikehero"/></div>
        </div>
    </div>
  )
}

export default Hero