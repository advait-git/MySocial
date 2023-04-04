import React, { useState } from 'react';
import './App.css';
import Post from "./post";
function App() {
  const [posts,setPost] = useState([
    {
      username: "RakaZoneGaming",
      caption:"wow it works",
      imageUrl:"https://www.indiagamingaward.com/assets/2022/images/jury-categories/Streamer-Of-The-Year-Male/Rishabh-Rakazone-Gaming-Karanwal.jpg"
    },
    {
      username: "Shroud",
      caption:"wow it works",
      imageUrl:"https://th.bing.com/th/id/OIP.enYcXzNWe_diI9_Af09Q0QHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
  ]);
  return (
    <div className="App">
      <div className="app_headerImage">
      <img 
      className='app_headerImage'
      src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt=""
        />
      </div>
      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;
