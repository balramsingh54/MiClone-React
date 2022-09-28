import React from 'react'
import data from '../data/data.json'
// import Offer from './Offer.js'

var myoffer = data.offer;

console.log(myoffer.image);

const Offers = () => {

  return (

    <div className='offer-section'>
        { myoffer.map((item)=>{
          console.log(item.image);
            <Offers key={item.image} src ={item.image} link={item.url}></Offers>
        })

        }
    </div>
  )
}

export default Offers



