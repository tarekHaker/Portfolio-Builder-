import React from 'react';
import NavUser from './navUser';
import MediaCard from "../portfiolo";
import FloatingButtons from '../iconUser';




export default function User() {
 
  return (
    <div >
     <NavUser />
   
     <div className='backgroundOnly'>
     
     <div className='portfiolo'> 

     <MediaCard />
     <MediaCard />
     <MediaCard />
   
  

     </div>
     <FloatingButtons />
     </div>

    </div>
  )
}
