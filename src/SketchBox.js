import React from 'react';

import {SketchField, Tools} from 'react-sketch';
// import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SketchBox extends React.Component {

      constructor(props) {
    super(props);

    this.state = {
      lineWidth: 10,
      lineColor: 'black',
      fillColor: '#68CCCA',
      backgroundColor: 'transparent',
      shadowWidth: 0,
      shadowOffset: 0,
      tool: Tools.Pencil,
      enableRemoveSelected: false,
      fillWithColor: false,
      fillWithBackgroundColor: false,
      drawings: [],
      canUndo: false,
      canRedo: false,
      controlledSize: false,
      sketchWidth: '100%',
      sketchHeight: '200px',
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: 'left',
      originY: 'top',
    //   imageUrl: 'https://files.gamebanana.com/img/ico/sprays/4ea2f4dad8d6f.png',
      expandTools: false,
      expandControls: false,
      expandColors: false,
      expandBack: false,
      expandImages: false,
      expandControlled: false,
      text: 'a text, cool!',
      enableCopyPaste: false,
    };
  }

  _selectTool = event => {
    this.setState({
      tool: event.target.value,
      enableRemoveSelected: event.target.value === Tools.Select,
      enableCopyPaste: event.target.value === Tools.Select
    });
  };

render() {    
    return (<div className="box no-cursor">
<SketchField
              name="sketch"
              className="canvas-area"
              ref={c => (this._sketch = c)}
              lineColor={this.state.lineColor}
              lineWidth="2"
              fillColor={
                this.state.fillWithColor
                  ? this.state.fillColor
                  : 'transparent'
              }
              backgroundColor={
                this.state.fillWithBackgroundColor
                  ? this.state.backgroundColor
                  : 'transparent'
              }
              width= "100%"
              height="200px"
              forceValue
              onChange={this._onSketchChange}
              tool={this.state.tool}
            />


                         <Button
                         style={{float:"right"}}
                      onClick={(e) => {
                        this._sketch.addImg("https://files.gamebanana.com/img/ico/sprays/4ea2f4dad8d6f.png")
                      }}> Add Image </Button>

<TextField
                        select={true}
                        label="Canvas Tool"
                        value={this.state.tool}
                        onChange={this._selectTool}
                        helperText="Please select Canvas Tool">
                        <MenuItem value={Tools.Select} key="Select">Select</MenuItem>
                        <MenuItem value={Tools.Pencil} key="Pencil">Pencil</MenuItem>
                        <MenuItem value={Tools.Line} key="Line">Line</MenuItem>
                        {/* <MenuItem value={Tools.Arrow} key="Arrow">Arrow</MenuItem>
                        <MenuItem value={Tools.Rectangle} key="Rectangle">Rectangle</MenuItem>
                        <MenuItem value={Tools.Circle} key="Circle">Circle</MenuItem>
                        <MenuItem value={Tools.Pan} key="Pan">Pan</MenuItem> */}
                      </TextField>
          </div> );
  }
}

export default SketchBox;