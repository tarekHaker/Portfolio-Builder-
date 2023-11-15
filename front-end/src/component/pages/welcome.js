import React from 'react';
import {ContainedButtons} from '../button';
import { useLocation } from 'react-router-dom';

export default function Welcome() {
  // Use the useLocation hook to get access to location and state
  const location = useLocation();
  const { state } = location;

  // Destructure firstName, lastName, and _id from the state if available
  const { firstName, lastName, _id } = state || {};

  return (
    <div className="container-welcome">
      <div className="left-welcome"></div>
      <div className="right-text-welcome">
        <div className="container-text-right-welcome">
          <div className="hi-user">
            {/* Display the firstName and lastName */}
            {firstName && lastName && <h1>HELLO {firstName} {lastName}!</h1>}
          </div>
          <div className="get-started">
            <h2>Let's create a beautiful portfolio!</h2>
            
            <ContainedButtons firstName={firstName} lastName={lastName} _id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
