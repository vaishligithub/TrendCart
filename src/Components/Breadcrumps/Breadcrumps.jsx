import React from 'react'
import './Breadcrumps.css'
import arrow_icon from '../Assets/arrow.png'
const Breadcrumps = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum' >
      HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>{product.category}
      <img src={arrow_icon}/> {product.name}
    </div>
  )
}

export default Breadcrumps
