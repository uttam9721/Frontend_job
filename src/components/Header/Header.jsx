import React from 'react'
import './Header.css'
// import Header from './Header';
import { assets } from './../../assets/assets';
const Header = () => {
  return (
    <div className='header'>
         <img className='header_img' src={assets.header_img}/>
      <div className="header-contents">
      <h2>Order your favourite food here</h2>
       <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
         Atque minima doloribus eius 
         consequuntur ducimus a debitis 
         velit dolorem. Accusamus, eos.
          Reprehenderit voluptatibus sed 
          adipisci illo mollitia vitae non
           molestias laboriosam.</p>
    {/* </div> */}
    <button>View More</button>
    </div>
    </div>
  )
}

export default Header
