import  { useState } from 'react';
import markDownContext from './markDown-context';
import useMarkdown from '../hooks/use-markdown';

const MarkDownProvider = props => {
  const [rawText, setRawText] = useState();
  const getMarkDownAsHTMLOutput = useMarkdown(rawText);
  
  const handleChangeRawInputedText = (text) => {
     setRawText(text);
  }

  localStorage.setItem('md-content', rawText);

 	return <markDownContext.Provider
      value={{ rawText, getMarkDownAsHTMLOutput, handleChangeRawInputedText }}
    >
 	  {props.children}
     </markDownContext.Provider>

}

export default MarkDownProvider;