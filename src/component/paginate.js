import {useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate';

export default function Paginate(props){
const {users} = props
 const [currentItems, setCurrentItems] = useState([]);
 const [pageCount, setPageCount] = useState(0);
 const [itemOffset, setItemOffset] = useState(0);
 const itemsPerPage = 4;

 useEffect(() => {
   const endOffset = itemOffset + itemsPerPage;
   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
   setCurrentItems(users.slice(itemOffset, endOffset));
   setPageCount(Math.ceil(users.length / itemsPerPage));
 }, [itemOffset, itemsPerPage,users]);

 const handlePageClick = (event) => {
   const newOffset = (event.selected * itemsPerPage) % users.length; 
   setItemOffset(newOffset);
 };
 return (
   <> 
 <ul className='users'>
      {currentItems.map((user)=>{
         return <li key={user.id}>
             <div>
               <a target="new"href={user.html_url}>{user.name}</a>
             </div>
        </li>
         })}
       </ul>
     <ReactPaginate
       breakLabel="..."
       nextLabel="next >"
       onPageChange={handlePageClick}
       pageRangeDisplayed={5}
       pageCount={pageCount}
       previousLabel="< prev"
       renderOnZeroPageCount={null}
       containerClassName="paginate"
       pageLinkClassName='page-number'
       previousLinkClassName='page-number'
       nextLinkClassName='page-number'
       activeLinkClassName='active '
     />
   </>
 );
}