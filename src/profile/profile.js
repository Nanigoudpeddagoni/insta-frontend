import React, { useEffect, useState } from 'react'
import "../cssFloders/profile.css"
import axios from 'axios'
import {url} from "../url.js"
export default function Profile() {
  
const [data ,setData] = useState([])
const name = localStorage.getItem("user")
 useEffect(()=>{
       
     function searchData(){
     fetch("/auth/profile",{
          headers:{
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
          },
        })
        .then(res => res.json())
        .then(result =>{ console.log(result)
        setData(result)})
        .catch(err=>console.log(err))

   }
   searchData()
   
 },[])


  return (
    <div className='user_profile'>
      

      <div className='bgpro'>
                 
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s' className='bg' />
                
                 <div style={{display:"flex",justifyContent:"center",width:"100%"  }}>
                      
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s' className='bgprofile' alt='demo'/>
         
                 </div>

                     
                 </div>
                 <div  className='section'>

            <span className='name ' style={{textTransform:"capitalize"}}> {name}</span>
           
            <ul style={{display:"flex" }}>
                    <p>
                      2 <br/> post
                    </p>
                    <p>
                      2 <br/> follwers
                    </p>
                    <p>
                      2 <br/> following
                    </p>

            </ul>

</div>
<p className='bio' style={{textAlign:"left" ,margin:"10px"}}>
  this is meee

</p>

                <p>

                </p>
      
       

      <hr style={{width:"90%",
    opacity:"0.7",
    
    }}/>
       {/* gallery */}
   <div className='gallery'>
    
  
  {
    data.map(post=>{
     return  (
      
      <img src={post.photo} className='gallery_image'/>
 
    )
    })
  }



   </div>
   


   </div>
  )
}

