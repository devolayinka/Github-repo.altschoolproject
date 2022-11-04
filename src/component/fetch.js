
import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../pages/navbar';
import Paginate from './paginate';
import { Helmet } from 'react-helmet-async';

const url = 'https://api.github.com/users/devolayinka/repos';
const Search = () => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true)
  
  const getAPI = async ()=>{
const response = await fetch(url);
const users = await response.json();
setUsers(users)
setLoading(false)
  };
  useEffect(()=>{
    getAPI();
  },[]);
  return(
    <>
     <Helmet>
    <title>Github Respository</title>
    <meta mane="description" content="error page" />
    <link rel="canonical" href="/search" />
  </Helmet>
  
    <div>
      <Navbar />
          <h1 className='heading'>DevOlayinka's Github respositiories</h1>
       {loading ? <h6 className='center'>  Loading...</h6> :
   <Paginate users= {users} />}
    </div>
    </>
  )
};

export default Search;
