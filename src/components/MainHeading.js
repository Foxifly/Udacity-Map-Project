import React from 'react';

//The menubar is a stateless component so we can define it just in a function.
function MainHeading(props) {
  return(
    <div className="main-header">
        <h1>SPUR OF THE MOMENT</h1>
        <h2>A horse care application</h2>
      </div>
  )
}

export default MainHeading;
