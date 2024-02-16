import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

function Breadcrumbs(props) {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default Breadcrumbs