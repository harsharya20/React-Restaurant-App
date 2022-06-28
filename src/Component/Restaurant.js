import React from 'react'
import "./style.css"
import Menu from "./MenuApi"


const Restaurant = () => {
  return (
    <>
    <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span> 
                <h2 className='card-title'>Maggi</h2>
                <span className='card-description subtle'>
                    I Love maggie.akgakga agjalgnjalag magma.
                    agakgma;ga.aglamblab
                </span>
                <div className='card-read'>Read</div>
            </div>
             <img src = {image} alt = "images" className='card-media' /> 

            <span className='card-tag subtle'>Order Now</span> 
        </div>
    </div>
    </>
  )
}

export default Restaurant