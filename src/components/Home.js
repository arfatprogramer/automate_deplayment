import React from 'react'
import './css/home.css'
import myimage from './images/my.png'
import backimage from './images/pattern.png'
import NavBar from './NavBar'

export default function Home() {

  React.useEffect(()=>{
    document.title="Home";
   
   },[]);
  return (
    <>
      <div className="container">
        <NavBar home='active' />
        <div className="box">
          <h1>Hello Everyone,</h1>
          <h2 className='name'>My Self <span>Mo Arfat Ansari.</span> </h2>
          <h3>I Am a <span>Softer Engener.</span> Currently i am learnig Web Devloment</h3>
          <button className='btn'>Download CV</button>
        </div>

        <div id='img' className="box">
          <img id='backimage' src={backimage} alt="" />
          <img id='myimage' style={{height:'100vh'}} src={myimage} alt="" />
        </div>
      </div>
    </>
  );
}
