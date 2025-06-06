import { useEffect } from 'react'
import React from 'react'
import NavBar from './NavBar'
import Cards from './Cards';
import img from './images/clock.png';
import img2 from './images/fan.png';

const Pro = () => {
  
  useEffect(()=>{
    document.title="Projets";
   },[]);
  return (
    <div className="container">
    <NavBar pro='active'/>
    <div className="mainbox">
    <Cards heading={"Clock"}about='Created using HTML Css and JavaScript' src={img} link='https://arfatprogramer.github.io/HostingPages/'codelink='https://github.com/arfatprogramer/HostingPages/blob/main/index.html'/>
    <Cards heading={"Fan "} about='Created using HTML Css and JavaScript'src={img2} link='https://arfatprogramer.github.io/HostingPages/fan' />
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    <Cards heading={"Cards Container"} src={img}/>
    </div>
</div>
  )
}

export default Pro
 