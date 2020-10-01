import React, { useState } from "react";
import ReactQuill from 'react-quill';
import { Box } from "@chakra-ui/core";
import 'react-quill/dist/quill.snow.css';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.setInitialValueString = this.setInitialValueString.bind(this);
    }

    setInitialValueString() {
        let listItems = []
        this.props.description.forEach(function(value){
            listItems.push(`<li>${value}</li>`);
        });
        return `<ul>${listItems.join('')}</ul>`;
        
    }
  
    modules = {
      toolbar: [
        [{'list': 'bullet'}],
      ],
    }
  
    formats = [
      'list'
    ]
  
    render() {
      return (
        <Box w="100%" className="text-editor">
          <ReactQuill defaultValue={this.setInitialValueString()}
                      theme="snow"
                      modules={this.modules}
                      formats={this.formats}>
          </ReactQuill>
        </Box>
      );
    }
  }
  
  export default MyComponent;