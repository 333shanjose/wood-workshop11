import React, { useEffect } from 'react'
import Adminhead from './Adminhead'
import './Adminnav.css'
import axios from 'axios'
function Adminnav() {
   useEffect(()=>{
      axios.get('http://localhost:4002/admin/login').then((res)=>{
          
        
      })
      
   })
  return (

    <>
      <Adminhead/>

    <div class="layout-page">
       <div class="header-section">
       <div class="menu-right">
       <ul class="notification-menu">
       <li class="open">
       <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
         <img src="" alt="" />  
            Admin                           
         <span class="caret"></span>
         </a>             
		 <ul class="dropdown-menu dropdown-menu-usermenu pull-right">
          <li><a href="https://webappstore.xyz/demo/thejusarch_new/index.php/admin/edit">
            <i class="fa fa-user"></i> <span>Change Password</span></a></li>
 
            <li><a href="https://webappstore.xyz/demo/thejusarch_new/index.php/admin/settings"><i class="fa fa-cog"></i> <span>Settings</span></a></li>
							
        <li><a href="https://webappstore.xyz/demo/thejusarch_new/index.php/admin/logout"><i class="fa fa-sign-out"></i> <span>Log Out</span></a></li>
        </ul>				
        </li>         
                    

                </ul>
            </div>

    </div>
    </div>
    </>
  )
}

export default Adminnav