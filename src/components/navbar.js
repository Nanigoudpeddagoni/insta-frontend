import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../cssFloders/navbar.css"
import { toast } from 'react-toastify';
import axios from 'axios'
function Navbar({usrlogin}) {
 const token = localStorage.getItem("jwt")

 const [data, setData]= useState('')
 const navigate = useNavigate()
let detailes
 useEffect(()=>{
 
  detailes= localStorage.getItem("user")

 if(detailes){

   setData(detailes)
       

 }
    

 },[])



   const logOut = async()=>{
          
   await localStorage.clear()
    toast.success("logout successfull")
    navigate("/")
                            
 
   }
   

    const login =() =>{
          if(usrlogin||token){
  
             return[
           
              <>
               {/* main content goes here */}
              
              <div className='navbar'>
  
               <p className='logo'><span className='logo1'>Instagram</span>   <span id='logo' class="material-symbols-outlined">
add_a_photo
</span></p>
          
                 <div className='container2'>


            <p className='icon'>   
             <Link to={"/home"}>
             <span id="icon"className="material-symbols-outlined">
            home
            </span>
            <span id="name">Home</span> 
            </Link> 
             </p> 
            
            <p className='icon'>
               <Link to={"/search"}>
               <span  id="icon" className="material-symbols-outlined">
            Search
            </span>   
              
            <span id="name">Search</span> 
            </Link>
            </p>
            <p className='icon'>
                  <Link to={"/post"}>
                  <span id="icon"className="material-symbols-outlined">
            animated_images
            </span>  
                    
            <span id="name">Post</span> 
            
            
            </Link>
            </p>
            
            <p className='icon'>
                 <Link to={"/reels"}>
                 <span id="icon"  className="material-symbols-outlined">
                 airplay
            </span>  
              
            <span id="name">Reels</span> 
               </Link>


               
              
            </p>


            <p className='icon'>
                 <Link to={"/Createpost"}>
                
                 <span class="material-symbols-outlined" id='icon'>
ios_share
</span> 
            <span id="name">create post</span> 
               </Link>



              
            </p>

       




                      </div>

                      <p className='last'>

                      <span className='profile'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s' className='card-pic' alt='demo'/>
                        <Link to ={"/profile"} style={{fontSize:"1rem" , color:"black"}}>   {data}</Link>
                      </span>
                      <span className='logut'>
                      <button style={{
                        padding:"10px",
                        width:"80%"
                      }} onClick={ logOut }> logOut</button>
                      </span>

                      </p>
                      </div>
    
              
              
              </>




             ]



          }
    }
  return (
    <>
    

      {login()}
    
    </>
  )
}

export default Navbar