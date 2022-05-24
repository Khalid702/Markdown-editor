import React from 'react';

const markDownContext =  React.createContext({
  rawText: "",
  getMarkDownAsHTMLOutput: "",
  handleChangeRawInputedText: (text) => {}
});

export default markDownContext;