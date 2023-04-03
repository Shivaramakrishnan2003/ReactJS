import React from 'react'
import Homepod from './Homepod.jpeg'
import iPhone from './iPhone14.jpg'

function Products() {
  return (
    <div style={{backgroundColor:'lightyellow'}}>
        <h1>Our Featured Products</h1>
        <img src={Homepod} alt='Homepod'/>
        <h4>Homepod</h4>
        <img src={iPhone} alt='iPhone14'/>
        <h4>iPhone14</h4>
    </div>
  )
}

export default Products