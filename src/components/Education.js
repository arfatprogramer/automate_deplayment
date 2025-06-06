import React,{useEffect} from 'react'
import NavBar from './NavBar'

const Education = () => {
  useEffect(()=>{
    document.title="Education";
   },[]);
  return (
    <div className="container">
        <NavBar edu='active'/>
        <div className="mainbox">
        <h1>This is <span>Education</span> page. </h1>
        <h2>it will be deaplay usnig API</h2>
        </div>
    </div>
  )
}

export default Education
