import React, {useState} from 'react';
import "./Arrows.css"


  function ArrowLeft (props) {
  


      // Такой синтаксис гарантирует, что `this` привязан к handleClick.
      return (
        <button className="ArrowLeft" onClick={props.onPrev} >
        

        </button>
      );

  }
   
  export default ArrowLeft;
