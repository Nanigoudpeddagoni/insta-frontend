import React, { useContext, useState } from 'react';
import "../cssFloders/signUp.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { loginContext } from './var';
import {url} from '../url'
function SignIn() {
 const {setUserlogin} = useContext(loginContext)

  const [password, setPassword] = useState("");
  const [text, seText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // new state for loading
  let email ="";
  let phone = "";
  let userdata="";
  const Navigator = useNavigate();
  
  const sineIn = async (e) => {
    e.preventDefault();
    setIsLoading(true); // set loading to true when function starts

    if((text!==""&&password!=="")||email!==""||phone!==""){
      if ( /[a-zA-Z]/.test(text) || text.includes("@")) {
        email = text;
      } else {
        phone= text;
      }
      await postdata(); // wait for postdata to finish before continuing
    } else {
          toast.warn("THE FIELDS SHOULD NOT BE EMPTY");
    }

    setIsLoading(false); // set loading to false when function ends
  }

  const postdata = async () => {
    await axios.post(`https://insta-backend-1-2u4q.onrender.com/auth/login`, {
      email,
      phone,
      password
    }).then( async (res) => {
      // console.log(res);
      const result = res.data.message;
      if(result.includes("successful")){
      
        toast.success("sined in sucessfull");
         setUserlogin(true)
         
        userdata = res.data.data.name
        localStorage.setItem("user",userdata)
        localStorage.setItem("id",res.data.data._id)
        localStorage.setItem("jwt",res.data.token )
           Navigator("/home");
      } 
      else {
        toast.warn(res.data.message);
      }
    }).catch(err => console.log("err is  "+err));
  }

  return (
    <>
      <div className='intro'>
        <div id='loader'></div>
        <div className='border'>
          <h1 className='heading'>  Instagram </h1>
          <div className='container'>
            <input type="text" placeholder='Mobile number or email address' onChange={(e)=>seText(e.target.value)} required/>
            <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <button onClick={sineIn} disabled={isLoading}> Login</button> {/* disable button while loading */}
          <p className='or'> <span className='orr'>or</span></p>
          <p>
            <a href="#" >Login with facebook</a>
          </p>
          <p>
            <a href='#' > forgot password ?</a>
          </p>
        </div>
        <div className='nxtborder'>
          <p className='holder'> Don't have an account? <Link to='/SignUp'>SignUp</Link> </p>
        </div>
      </div>
    </>
  )
}

export default SignIn;
