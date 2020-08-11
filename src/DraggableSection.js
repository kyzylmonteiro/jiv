import React from 'react';
import Draggable from 'react-draggable'; // The default
import Box from './Box';
import SketchBox from './SketchBox';
import {BsPencilSquare,BsFillPlusSquareFill} from "react-icons/bs"
// import {DraggableCore} from 'react-draggable'; // <DraggableCore>


class DraggableSection extends React.Component {
      state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: 100, y: 100
    },
    boxes : [
            <Box />]
  };


    onAddBtnClick = () => {
    this.setState({
      boxes: [...this.state.boxes, <Box />]
    })
  };
  onAddBtnClickSketch  = () => {
    this.setState({
      boxes: [...this.state.boxes, <SketchBox />]
    })
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: this.state.activeDrags+1});
  };

  onStop = () => {
    this.setState({activeDrags: this.state.activeDrags-1});
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };


  render() {
          const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {controlledPosition} = this.state;

    
    return (
      <div>
      
      <h1>Jiv</h1>

        <Draggable handle="strong" position={controlledPosition} {...dragHandlers} onDrag={this.onControlledDrag}>
          <div className="boxHead no-cursor">
          <strong className="cursor" contenteditable="true"><div>Click and Drag me</div></strong>
            {this.state.boxes}
            <div style={{float:"right", paddingTop:"10px"}} >
            <BsFillPlusSquareFill size="1.5em" color="grey" style={{padding:"3px"}} cursor="pointer" onClick={this.onAddBtnClick}/>
            <BsPencilSquare size="1.5em" color="grey" style={{padding:"3px"}} cursor="pointer" onClick={this.onAddBtnClickSketch}/>
            </div>
        </div>
        </Draggable>
      </div>
    );
  }
}

export default DraggableSection;
// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('hello-example')
// )