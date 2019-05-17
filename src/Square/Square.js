import React from 'react';
import './square.css';

/**
 * Individual tic tac toe square
 * this.props is data provided to the component from outside
 * this.state is data available locally to the component
 * 
 * Square is considered a controlled component as all the 
 * values/alterations are done in the Board component
 * 
 * write class as a function component instead of extending react component 
 * if class only as a render method and no state
 */
function Square(props) {
  // everytime setState is called, Square and its children will be re-rendered
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

// "export default" to make component accessible in other places
export default Square;
