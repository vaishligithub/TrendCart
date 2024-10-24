import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/Context'
import Items from '../Components/Items/Items'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
const ShowCategory = (props) => {
  const{all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
    <img className="shopCategory-banner" src={props.banner} />
    <div className='shopCategory-indexSort'>
  <p>
    <span>Showing 1-12</span> out of 36 products
  </p>
  <div className='shopcategory-sort'>
       Sort by <img src={dropdown_icon} alt=''/>
  </div>
    </div>
    <div className='shopcategory-products'>
   {all_product.map((item,i)=>{
    if(props.category===item.category){
      return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }
    else{
      return null;
    }
   })}
    </div>
    <div className='shopcategory-loadmore'>
        Explore More
    </div>
    </div>
  )
}

export default ShowCategory
