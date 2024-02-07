import React from 'react'
function Addproducts() {
  return (
    <>
    <form  action="http://localhost:4002/admin/addproduct" method="post" enctype="multipart/form-data" style={{paddingLeft:"30px",paddingTop:"30px"}}>
    <div>
    <label>Name</label>
        <input type="text" name="names"/>
      
    </div>
    
    <div style={{paddingTop:'20px'}}>
    <label>Price</label>
        <input type="number" name="price"/>

    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Description</label>
        <input type="text" name="description"/>
    </div>
    <div style={{paddingTop:'20px'}}>
    <label>Images</label>
        <input type="file" name="image"/>
    </div>
    
    
    <div style={{paddingTop:'20px'}}>
    <button type="submit">submit</button>
    </div>
    </form>
    
    
    </>
  )
}

export default Addproducts