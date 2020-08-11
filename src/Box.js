import React from 'react';

class Box extends React.Component {
render() {    
    return (<div className="box no-cursor" contenteditable="true">
    click to edit text
          </div> );
  }
}

export default Box;