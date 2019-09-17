import React from 'react';
import './CharComponents.css';

const CharComponents = (props) => {
  return (
    <div className="CharComponent" onClick={props.clicked}>
      <p>{props.char}</p>
    </div>
  );
}

export default CharComponents;
