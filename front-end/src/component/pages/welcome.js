import React from 'react';
import ContainedButtons from '../button';
import { useLocation } from 'react-router-dom';

export default function Welcome() {
  // Use the useLocation hook to get access to location and state
  const location = useLocation();
  const { state } = location;

  // Destructure firstName and lastName from the state if available
  const { firstName, lastName } = state || {};

  return (
    <div class="container-welcome">
      <div class="left-welcome"></div>
      <div class="right-text-welcome">
        <div class="container-text-right-welcome">
          <div class="hi-user">
            {/* Display the firstName and lastName */}
            {firstName && lastName && <h1>HELLO {firstName} {lastName}!</h1>}
          </div>
          <div class="get-started">
            <h2>Let's create a beautiful portfolio!</h2>
            <ContainedButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
