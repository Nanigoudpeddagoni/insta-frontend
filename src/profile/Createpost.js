import React, { useEffect, useState } from 'react'
import "../cssFloders/cpost.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {url} from "../url.js"

export default function Createpost() {
  const Navigate = useNavigate();
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    if (url) {
      axios.post(
       `https://insta-backend-1-2u4q.onrender.com/auth/Createpost`,
        {
          body,
          pic: url
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
          }
        }
      )
        .then(response => {
          toast.success("successfully posted");
          setUrl("")
          Navigate("/home")


          document.getElementById('post-btn').innerText = "share"
        })
        .catch(error => {
          toast.error("error in server");
          setUrl("")
          document.getElementById('post-btn').innerText = "share"
        });
    }
    setName(localStorage.getItem("user"))
  }, [url])

  const postDetailes = async (e) => {
    e.preventDefault()
    if (!body || !image) {
      return toast.warn("fields are empty")
    }
    document.getElementById('post-btn').innerText = "processing..."
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "clone-insta")
    data.append("cloud_name", "clonesection")

    await axios({
      url: "https://api.cloudinary.com/v1_1/clonesection/image/upload",
      method: "POST",
      data: data
    })
      .then(res => setUrl(res.data.url))
      .catch(err => console.log(err));
  }

  var loadFile = (event) => {
    var output = document.getElementById('output');
    if (event.target.files[0]) {
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
      };
    }
  };

  return (
    <div className='createPost'>
      <div className='post-header'>
        <h4 style={{ margin: "0px auto" }}> Create new post</h4>
        <button id='post-btn' onClick={postDetailes}>Share</button>
      </div>
      <div className='main-div'>
        <img id="output" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s" alt="Description of the image" />
        <input type="file" accept="image/*" onChange={(event) => {
          loadFile(event); setImage(event.target.files[0])
        }} />
      </div>
      <div className='card-info'>
        <div className='card-pic'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEPYF3Aa7hOVW-XDzAwi3xTMVcbAbExDk-t6VZbp8uw&s' className='card-post-pic' alt='demo' />
        </div>
        <h3 className='text'> {name} </h3>
      </div>
      <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)} style={{ textAlign: "center" }} placeholder='text the cation'></textarea>
    </div>
  )
}
