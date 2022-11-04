import React,{useState, useEffect}from 'react';

const url = "https://olayinka-portfolio.netlify.app/";

const Portfolio = () => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([])
const getData = async()=>{
const resp = await fetch(url);
const datas = await resp.json();
setData(datas)
setLoading(true)
}

useEffect(()=>{
getData()
},[])
  return (
    <div>
{loading ? <h6 className='center'>  Loading...</h6>  : 
<ul>
    {data.map((item)=>{
        console.log(item)
        return(
            <li>{item.name}</li>
        )
    })}
</ul>
}
    </div>
  )
}

export default Portfolio