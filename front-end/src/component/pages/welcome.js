import React from 'react';
import ContainedButtons from '../button';


export default function Welcome() {
 
  return (
    
    <div class="container-welcome">
    <div class="left-welcome"></div>
    <div class="right-text-welcome">
        <div class="container-text-right-welcome">
            <div class="hi-user">
            <h1>HELLO </h1> <h1>User ! </h1>
            </div>
            <div class="get-started">
             <h2>Let's   create a beautifull portfolio ! </h2> 
              <ContainedButtons   />
            </div>
          
        </div>
    </div>
</div>

    
  )
}
