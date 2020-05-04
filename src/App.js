import React from 'react';
import './style.css';
import './App.css';
import imageInSrc from './imageInSrc.jpg';
import Video from 'react-player'
function App() {
  return (
    <div>
      <div style={{border: "solid 1px black",maxWidth:"100vw"}}>  
 
        <h1 className={"title red"}>Panda.com</h1>  

        <br/>  

        <img src={imageInSrc} alt="Logo Panda"/>
       
        <br/> 

        <img src={"imageInPublic.jpg"} alt="Panda eating sugar cane"/>  

      </div>  

      <Video  url={"../myVideo.mp4"} width={320} height={240} controls/>  
    </div>
  );
}

export default App;
