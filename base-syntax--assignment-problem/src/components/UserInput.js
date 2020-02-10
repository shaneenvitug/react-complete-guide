import React from 'react';

const userInput = (props) => {
  const style = {
    border: "2px solid orange"
  }

  return (
    <input 
      type="text" 
      onChange={props.onChange} 
      value={props.username}
      style={style} />
  )
}

export default userInput;