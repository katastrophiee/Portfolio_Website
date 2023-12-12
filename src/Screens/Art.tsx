import artwork from '../data.json';
import React from 'react';

export default function Art() {
    return(
        <>
        <div>
            <h1>Art</h1>
            <p>Here's some art I've done.</p>
        </div>
            {/* <ImageComponent location="react/src/Assets/Screenshot_20231005_180441_Instagram.jpg" alt="no cat  :(" /> */}
        </>
    );
}

function ImageComponent(props) {
    return (
      <div>
        <img src={props.location} alt={props.alt} />
      </div>
    );
  }
