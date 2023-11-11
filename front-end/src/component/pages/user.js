import React from 'react';
import NavUser from './navUser';
import MediaCard from "../portfiolo";
import FloatingActionButtons from '../icon'


export default function User() {
  return (
    <div >
     <NavUser />
   
     <div className='backgroundOnly'>
     
     <div className='portfiolo'> 

     <MediaCard />
     <MediaCard />
     <MediaCard />
     <MediaCard />
     
     <FloatingActionButtons />
     
     

     </div>
    
     </div>

    </div>
  )
}
