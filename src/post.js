import React from 'react';
import "./post.css";
import { Avatar } from '@mui/material';

function post({ username , caption , imageUrl }) {
  return (
    <div className="post">
      <div className='post_header'>
      <Avatar 
      className="post_avatar"
      alt=" "
      src=''/>
      <h3>{username}</h3>
      </div>

      <img className= "post_image" src= {imageUrl} alt= " " />


      <h4 className="post_text"> <strong> {username} </strong> {caption} </h4>
    </div>
  );
}

export default post
