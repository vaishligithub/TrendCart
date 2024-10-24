import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dullicon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Context'
const ProductDisplay = (props) => {
  console.log(props,"product");
  const{product}=props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
         <div className='productdisplay-img-list'>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             

         </div>
         <div className='prouctdisplay-img'>
            <img className="productdisplay-main-img" src={product.image}/>
         </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
         <img src={star_icon} alt=''/>
         <img src={star_icon} alt=''/>
         <img src={star_icon} alt=''/>
         <img src={star_icon} alt=''/>
         <img src={star_dullicon} alt=''/>
         <p>{122}</p>
        </div>
        <div className='productdisplay-right-prices'>
         <div className='productdisplay-right-price-old'>
            ${product.old_price}
         </div>
         <div className='productdisplay-right-price-new'>
          ${product.new_price}
         </div>
        </div>

         <div className='productdisplay-right-description'>
           dsdmks,m efkjefe enfkjefklwef fmewfmwflmw wf wkefmklw ewkfmwemf efnkewfn efjekfmwe fejwfwefjwkjkeoiefjeuhf 
          efnkjew enfkjwefnk nfwjkyugef euhi

         </div>
         <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>


            </div>
         </div>
          <button onClick={()=>{addToCart(product.id)}} className='productdisplay-right-button'>ADD TO CART </button>
          <p className='productdisplay-right-category'>
            <span>Category</span> Women,T-Shirt,Crop-Tops
          </p>
          <p className='productdisplay-right-category'>
            <span>Tags :</span> Modern,Lattese
          </p>
      </div>
    </div>
        



  )
}

export default ProductDisplay
