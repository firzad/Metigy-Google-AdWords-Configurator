import React from 'react';
import axios from 'axios';

const callServer = () => {
  axios.get('http://localhost:8000/test', {
    params: {
      table: 'sample',
    },
  }).then((response) => {
    console.log(response.data);
  });
}

export function BaseComponent() {
  // let output = "";
  return (
    <div>
      This is the base component
      {callServer()}
    </div>
  );
}
