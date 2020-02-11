import React from 'react';

const validation = (props) => {
  let output = props.length >= 5 ? 'Text long enough' : 'Text too short'

  // if (props.length >= 5) {
  //   output = 'Text long enough';
  // } else {
  //   output = 'Text too short';
  // }

  return (
    <div>
      <p>Length = {props.length}</p>
      <p>{output}</p>
    </div>
  )
}

export default validation;