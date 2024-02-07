




import React, { useEffect, useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import Emergency from './Emergency1'
function Cart() {
  const[c,setC]=useState([])
  const[products,setProducts]=useState([])
  const[total,setTotal]=useState('')
   function changeQuantity(cartId,productId,count){
       let quantity=parseInt(document.getElementById(productId).innerHTML)
       console.log(productId)
      axios.post('http://localhost:4002/count',
      {
        cart:cartId,
        proId:productId,
        count:count,
        quantity:quantity
      }).then((res)=>{
          if(res.data.removeproduct){
              alert('product removed')
              window.location.reload()
          }else {
        
            document.getElementById(productId).innerHTML=count+quantity
              setTotal(res.data.total)
              console.log(total)



          } 
      })
       
   }

   useEffect(()=>{
     axios.get('http://localhost:4002/cart-pages').then((res)=>{
       setProducts(res.data.cart)
       
     })
   })
  return (
    <>
      <section class="cart-page">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-6 col-lg-offset-0 col-md-offset-0 col-sm-offset-3">
                <table class="table cart-table">
                    <thead>
                        <tr>
                            <th class="preview">Preview</th>
                            <th class="product">Product</th>
                            <th class="price">Price</th>
                            <th class="quantity">Quantity</th>
                            <th class="total">Total</th>
                            <th class="del-item">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                             {products.map((p)=>{
                                 return (
                                 <tr>
                            <td class="preview">
                                <img src={"images/"+p.product.filename} alt="" style={{width:'30px',height:'20px'}}/>
                            </td>
                            <td class="product">
                                {p.product.names}
                            </td>
                            <td class="price">
                                {p.product.price}
                            </td>
                            
                             
                            <td class="quantity">
                                <button class="btn btn-primary" onClick={()=>changeQuantity(p._id,p.product._id,1)}>+</button>
                                <span id={p.product._id}>{p.quantity}</span>

                                <button class="btn btn-primary" onClick={()=>changeQuantity(p._id,p.product._id,-1)}>-</button>

                            </td>
                            
                                
                            </tr>
                            )
                             })}
                            
                              
                            
                                
                        
                    </tbody>
                    
                            
                </table>
            </div>
        </div>
        <div class="row bottom-box">
            <div class="col-lg-6 col-md-6 col-sm-6 pull-left cupon-box">
                <input type="text" placeholder="cupon code"/>
                <button type="submit">Apply Cupon</button>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 pull-right add-to-cart-wrap">
                <a href="#" class="hvr-bounce-to-right">Add to Cart</a>
            </div>
        </div>
        <div class="cart-total-box row">
            <div class="col-lg-5 col-sm-6 col-xs-12 pull-right">
                <ul>
                    <li class="cart-total">Cart Total</li>
                    <li class="sub-total">Sub Total <span>$25</span></li>
                    <li class="total">Total <span>{total}</span></li>
                    <li class="proceed-to-checkout"><a href="/checkout" class="hvr-bounce-to-right">Proceed to checkout</a></li>
                </ul>
            </div>
        </div>
    </div>  
</section>
<Emergency/>
    </>
  )
}

export default Cart