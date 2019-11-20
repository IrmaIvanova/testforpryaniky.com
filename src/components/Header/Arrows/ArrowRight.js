import React from 'react';
import "./Arrows.css"

function ArrowRight(props) {
  
  return (
    <div>
          <button className="ArrowRight" onClick={props.onNext}>
          
          </button>
    </div>
  );
}

export default ArrowRight;