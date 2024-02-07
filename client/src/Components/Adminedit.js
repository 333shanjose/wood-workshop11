import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
function Adminedit(props) {
    const location=useLocation()
    
   const propsdata=location.state
   const [products,setProducts]=useState({})
     
   function changeImage(e){
    document.getElementById('imageView').src=URL.createObjectURL(e.target.files[0])
   }
   const handleChange = e => {
    setProducts({
    
       email:e.target.value
    })
    console.log(products)
  }
          useEffect(()=>{
            axios.get('http://localhost:4002/admin/editproducts/'+propsdata).then((res)=>{
               console.log(res)
              setProducts(res.data.products)
            
              
        })

      },[])
  
      
  return (
    <>
      <form  action={'http://localhost:4002/admin/editproducts/'+propsdata} method="post" enctype="multipart/form-data" style={{paddingLeft:"30px",paddingTop:"30px"}}>
    <div>
    <label>Name</label>
        <input type="text" name="names"  value={products.names} onChange={handleChange}  />
      
    </div>
    
    <div style={{paddingTop:'20px'}}>
    <label>Price</label>
        <input type="number" name="price" value={products.price} />

    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Description</label>
        <input type="text" name="description" value={products.description} />
    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Images</label>
    
    <img src={'/images/'+products.filename} id='imageView'  style={{width:'30px',height:'30px',marginBottom:'10px'}}/>
    
        <input type="file" name="image"  onChange={changeImage}/>
    </div>
    
    
    <div style={{paddingTop:'20px'}}>
    <button type="submit">submit</button>
    </div>
    </form>
     
    
    </>
  )
}

   
export default Adminedit