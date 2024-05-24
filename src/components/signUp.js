import React, { useState } from 'react'
import "../cssFloders/signUp.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../cssFloders/loading.css"
import {  toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom'
import {url} from "../url.js"
function SignUp() {
  const navigator = useNavigate()
 
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [text ,setText] = useState('');
  const [password, setPassword] = useState('');
  let email="";
  let phone ="";

 
   

 const  newUser = async(e)=>{
         
     e.preventDefault()
    

     const random =99999*(Math.floor(Math.random()*1000000))
     console.log(random)
    
    
   
    
    if(text && (password!=="" || username!=="" || name!==""))
       {
   
    
         if ( /[a-zA-Z]/.test(text) || text.includes("@")) {
        email = text;
        phone =  random;
        console.log("number " +phone+ "email "+text)
        postdata();
    }
         else
     {
         phone= text;
         email = random+"@Gmail"
         if(phone.length!==10){
      
          toast.warn("phone number is incorrect")
   
       }   
        else{

          console.log("number " +phone+ "email "+text)
          postdata();
        }
    }
    
     
  } else {
      toast.warn("Fields are empty");
  }
  

    }

    
    const postdata = async ()=>{

     
        await axios.post(`${url}/auth/signUp`, {
            email,
            phone,
            name,
            username,
            password
        }).then(res => {
            setTimeout(() => {
                toast.success(res.data.message);
               
              // Hide loading animation after showing the alert
            }, 2000);
            navigator('/')
           // Increase this value for a longer delay
        }).catch(err => {
            console.log("error occured in " + err);
            toast.warn('eroor occured in server')
           // Hide loading animation in case of error
        });
    }
    

    

       
  return (
    <>
           <div className='intro' id='intro'>
          



               <div className='border'>
                   <h1 className='heading'>  Instagram </h1>  
                    <p>Sign up to see photos and videos from your friends.</p>

                    <button style={{color:"white"}}>login with facebook</button>
                     
                  <p className='or'> <span className='orr'>or</span></p>
                      <form>
                      <div className='container'>
                    
                                <input type="email" placeholder=' email address or phone number' onChange={(e)=>setText(e.target.value)} required/>
                                <input type="text " placeholder='Full Name'  onChange={(e)=>setName(e.target.value)} required/>
                                <input type="text" placeholder='Username'  onChange={(e)=>setUsername(e.target.value)} required/>
                                <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} required/>
                      </div>
                         <p>
                         People who use our service may have uploaded your contact information to Instagram. Learn more
                         </p>
                         <p>
                         By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                         </p>
                         <button id='btn' onClick={newUser} > Sign Up</button>  
                      </form>
                         
                </div>    
                 <div className='nxtborder'>
                        
                        <p className='holder'> Have an account?<Link to='/'>SignIn
                        </Link>
 </p>
                 </div>

           </div>
        



           <footer>

            This is a clone app - by nani goud
           </footer>

    </>
  )
}

export default SignUp