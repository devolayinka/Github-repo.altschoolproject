import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
  return (
    <div className="nav">
    <div>
        <Link to="/home"className='logo'> devolayinka
        </Link>
       
    </div>
    <div className='navlinks'>
     <ul>
      <li>
      <Link to="/home"className='heading'> Home
        </Link>  </li>
      <li>
     <a href ="https://olayinka-portfolio.netlify.app/" target="new">Portfolio</a>
      </li>
      <li>
      <Link to="/search"className='heading'> repo
        </Link>
    
      </li>
     </ul>
    </div>
    </div> 
   
  )
}

export default Navbar