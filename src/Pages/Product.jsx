import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrumps from '../Components/Breadcrumps/Breadcrumps';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  console.log("param",productId)
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
    <Breadcrumps product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedProducts/>
    </div>
  )
}

export default Product
