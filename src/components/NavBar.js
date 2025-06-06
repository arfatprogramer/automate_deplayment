import React, { useEffect } from 'react'
import './css/NavBar.css'
import sun from './images/sun.png'
import moon from './images/moon.png'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  
  let mod = 2;
  let mode = () => {
    if (mod === 2) {
      document.getElementById('img').src = moon;
      document.body.className = 'dark';
      mod = 3;
    }
    else {
      document.body.className = '';
      document.getElementById('img').src = sun;
      mod = 2;
    }
  } 
  
  // let elem=document.getElementsByClassName('navul');
  
  return (
    <nav>
      <div className="logo" >Arfat</div>
      <ul className="navul">
        <Link to="/"><li className={props.home} >Home</li></Link>
        <Link to="/education" className={props.edu} ><li>Education</li></Link>
        <Link to="/project"><li className={props.pro}>Projects</li></Link>
        <Link to="/about"><li className={props.about}>About</li></Link>
        <Link to="/contact"><li className={props.contact}>Contact</li></Link>
        <Link to="/login"><li className={props.login}>Login</li></Link>
        {/* conditional rendering */}
        {mod === 2?<img src={sun} onClick={mode} id='img' />:<img src={moon} onClick={mode} id='img' />}
      </ul>
    </nav>
  )
}
