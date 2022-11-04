import React from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Error = () => {
  return <>
  <Helmet>
    <title>Error Page</title>
    <meta mane="description" content="error page" />
    <link rel="canonical" href="/error" />
  </Helmet>
     <Navbar />
         <div className='centerr'>
        <h1 className='heading'>Sorry,Page not found</h1>
        {/* <Link  to="/home" className='btnn'>
            Go back home</Link> */}
              <Link to='/home'className='bttn'>Go back Home</Link>
    </div>
  </>
 
     
  
}

export default Error