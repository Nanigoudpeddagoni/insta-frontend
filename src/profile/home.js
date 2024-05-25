import React, { useEffect, useState } from 'react'
import "../cssFloders/Home.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {url} from "../url.js"

function Home() {
  // const [items, setItems] = useState([])
  // const [data, setData] = useState([])
  // const [value, setValue] = useState(false)
  // const [status, setStatus] = useState(false)
  // const [text, setText] = useState("")
  // const token = localStorage.getItem("jwt")
  // const id = localStorage.getItem("id")
  // const navigate = useNavigate()
  // const dis = document.getElementById("display")
  // const [showIndex, setShowIndex] = useState(null);
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [showIndex, setShowIndex] = useState(null);
  const token = localStorage.getItem("jwt");
  const id = localStorage.getItem("id");
  const detailes= localStorage.getItem("user")
  
  const navigate = useNavigate();
  useEffect(() => {

    if (!token) {
      navigate("/");
    }
   alert(detailes+" hi ra ");
    const fetchData = async () => {
      try {
        console.log(url)
        const response = await fetch("https://insta-backend-1-2u4q.onrender.com/auth/reqpost", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        });
        const result = await response.json();
        setData(Array.isArray(result) ? result : []);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchData();




  }, []);

  const likesupdate = (postId) => {
    axios.put(`https://insta-backend-1-2u4q.onrender.com/auth/likes`, { postId }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      }
    })
      .then(response => {
        const updatedPost = response.data;
        setData(data.map(post => post._id === updatedPost._id ? updatedPost : post));
      })
      .catch(err => console.log(err));
  };

  const unlikesupdate = (postId) => {
    axios.put(`https://insta-backend-1-2u4q.onrender.com/auth/unlikes`, { postId }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      }
    })
      .then(response => {
        const updatedPost = response.data;
        setData(data.map(post => post._id === updatedPost._id ? updatedPost : post));
      })
      .catch(err => console.log(err));
  };
  // tootle situation






  const comments = (text, postId) => {
    axios.put(`https://insta-backend-1-2u4q.onrender.com/auth/comment`, { text, postId }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      }
    })
      .then(response => {
        const updatedPost = response.data;
        setData(data.map(post => post._id === updatedPost._id ? updatedPost : post));
      })
      .catch(err => console.log(err));
  };

 

  // comments()





  return (
    <div id='display'>
      <div className='mobile' style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "2rem", paddingTop: "10px", textTransform: "capitalize", fontWeight: "600" }}>
          instagram
        </span>
        <p className='mobilepro'>
          <Link to={"/profile"}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s' className='card-profile-pic' style={{ marginRight: "10px" }} /></Link>
        </p>
      </div>
      <div className='story'>

        <div className='storycircle'>
          <img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" />
        </div>
        <div className='storycircle'>  <img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" />
        </div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>
        <div className='storycircle'><img src='https://i.pinimg.com/736x/8a/55/99/8a5599792c0d7b0a02377b97fafe76a9.jpg ' className="storyimg" /></div>

      </div>
      {data.map((post, index) => {
        // console.log(post)
        var name = post.postedBy.name
        // setItems(post.comments)


        return (
          <div className='card' key={index}>
            <div className='card-profile'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s' className='card-profile-pic' />
              <span className='card-profile-name'>{name}</span>
            </div>
            <div className='card-post'>
              <img src={post.photo} className='card-post-pic' alt='demo' />
              <div className='card-content'>
                {
                  !post.likes.includes(id) ? <>
                    <span className="material-symbols-outlined" onClick={() => { likesupdate(post._id) }}>favorite</span> </>
                    : <>
                      <span className="material-symbols-outlined like" onClick={() => { unlikesupdate(post._id) }}>favorite</span>
                    </>}


                <p className='likes' style={{ textAlign: "left" }}>{post.likes.length} likes</p>
                <p className='des' style={{ textAlign: "left" }}> <span style={{ color: "black", fontWeight: "500" }}>Des :</span>  {post.body}</p>
                <p style={{ textAlign: "left", fontWeight: "800", color: 'black', cursor: "pointer" }} onClick={() => setShowIndex(index)} >
                  view all the comments... {/* view all the comments...  onClick={()=>{show(post)} */}

                </p>
                {showIndex == index && (

                  <div id='modal'>


                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', width: '100%', marginBottom: "20px" }}>
                      <p className='username'>{name}</p>
                      <p className='close' onClick={() => { setShowIndex(null) }}>×</p>
                    </div>

                 {  post.comments.map((comment,index)=>{
                      console.log(comment,index)
                  return (
                    <>

                              <span className='userid' > user   == &#62;
                         {   comment.postedBy.name} 
                       </span>
                       <p style={{marginLeft:"1.9rem" , textAlign:"left",padding:"15px",borderBottom:"1px solid #f2f2f2"}}>
                        {comment.comment}
                       </p>
                    </>
                  

                  )
                 })
                  }

                  </div>)}
              </div>

            </div>

            <div style={{ zIndex: "1" }} className='comment'>
              <span className="material-symbols-outlined" >sentiment_very_satisfied</span>
              <input type='text ' onChange={(e) => setText(e.target.value)} className='comment-text' placeholder='comment' style={{ cursor: "pointer" }} />
              <button className='btn-post'>
                <span id='sent' onClick={() => comments(text, post._id)} style={{ marginRight: "10px" }}>

                  post


                </span>
              </button>
            </div>
          </div>
        )
      })}





    </div>
  )
}

export default Home
