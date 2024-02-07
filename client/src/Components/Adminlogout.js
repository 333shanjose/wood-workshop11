import React, { useEffect } from 'react'
import axios from 'axios'
function Adminlogout() {
    useEffect(()=>{
        axios.get('http://localhost:4002/admin/logout').then((res)=>{
            console.log(res)
        })
    })
  return (
    <>
    
    
    </>
        
        
        
  )
}

export default Adminlogout