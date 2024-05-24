import React, { useEffect, useState  } from 'react';
import "../src/App.css"
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Home from './profile/home'
import Search from './profile/search'
import Post from './profile/post'
import Profile from './profile/profile';
import Navbar from './components/navbar'
import Reels from './profile/reels';
import { loginvar } from './components/var';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import {loginContext } from "./components/var"
import Createpost from './profile/Createpost';
function App() {
  const [userlogin, setUserlogin] = useState(false);
  const token = localStorage.getItem("jwt");
 


  return (
    <BrowserRouter>
    <loginContext.Provider value={{setUserlogin}}>
    <div className='main-sec'>
       {token? <Navbar login ={ userlogin}/> :null }
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className='main'>
          <Routes>
                
              
             {!token ? <>
             
              <Route path='/SignUp' element={<SignUp />} />
                <Route path='/' element={<SignIn />} />
             </>: <>
             <Route path='/Reels' element={<Reels />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/Post' element={<Post />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Createpost' element={<Createpost />} />
                <Route path='/Profile' element={<Profile />} />
             </>}
               
            
          </Routes>
        </div>
      </div>
    </loginContext.Provider>
     
    </BrowserRouter>
  )
}

export default App;
