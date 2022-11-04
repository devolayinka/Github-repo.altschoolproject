import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import { Helmet } from 'react-helmet-async';
const home = () => {
  return (
  <>
    <Helmet>
<title>Home Page</title>
<meta name="description" content="Home page for github project" />
<link rel="canonical" href="/home" />
    </Helmet>
    
  <section>
<Navbar />
        <div className="center">
      <div className="center-btn">
        <h2 className='heading-two'>Welcome to Devolayinka's Github Respository Project</h2>
        <p className='para'>This page was made with Love using React and react hooks</p>
        <Link to='/search'className='btn'>Explore More</Link>
        
      </div>
      <div></div>
        </div>
          </section>
    </>
   
        

     
      
    
  )
}

export default home