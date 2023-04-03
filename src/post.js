import React from 'react';
import "./post.css";
import { Avatar } from '@mui/material';

function post({ username ,caption ,imageUrl }) {
  return (
    <div className="post">
      <div className='post_header'>
      <Avatar 
      className="post_avatar"
      alt="Shroud"
      src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb46f666181241.5b0d977d9e971.jpg'/>
      <h3>{username}</h3>
      </div>

      <img className="post_image" src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="" />


      <h4 className="post_text"><strong>Advait</strong>  you are doing good!</h4>
    </div>
  );
}

export default post
