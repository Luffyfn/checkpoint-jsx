import React from 'react';
import './App.css';
import imageInSrc from './imageInSrc.jpg';
import Video from 'react-player'
function App() {
  return (
    <div>
      <div style={{border: "solid 1px black",maxWidth:"100vw"}}>  
 
        <h1 className={"title red"}>Panda.com</h1>  

        <br/>  

        <img src={imageInSrc}/>
       
        <br/> 

        <img src={"imageInPublic.jpg"}/>  

      </div>  

      <Video  url={"../myVideo.mp4"} width={320} height={240} controls/>  
    </div>
  );
}

export default App;
