import React,{useEffect} from 'react'
import NavBar from './NavBar'

function About() {
  useEffect(()=>{
    document.title="About";
   },[]);
  return (
    <div className="container">
        <NavBar about='active'/>
        <div className="mainbox">
        <h1>This is <span>About</span> page. </h1>
        <h2>it will be deaplay usnig API</h2>
        </div>
    </div>
  )
}

export default About
