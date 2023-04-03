import React from 'react';
import './App.css';
import Post from "./post";
function App() {
  return (
    <div className="App">
      <div className="app_headerImage">

        
      <img 
      className='app_headerImage'
      src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt=""
        />

      </div>
      <Post username='RakaZoneGaming' caption='wow it works' imageUrl='https://www.indiagamingaward.com/assets/2022/images/jury-categories/Streamer-Of-The-Year-Male/Rishabh-Rakazone-Gaming-Karanwal.jpg' />
      <Post />
      <Post />
    </div>
  );
}

export default App;
