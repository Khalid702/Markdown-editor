import React, { useContext } from 'react';

import markDownContext from '../context/markDown-context';
import style from './MarkdownSantized.module.css';

const MarkdownSanitized = () => {
  const markDownCtx = useContext(markDownContext);
  const parser = new DOMParser();
  const doc = parser.parseFromString(markDownCtx.getMarkDownAsHTMLOutput, "text/html");
  
    return ( 
     <div className={style.outputArea}>
      <h4>Markdown Ouput</h4>	
	    <div contentEditable='true' 
	         dangerouslySetInnerHTML={{ __html: markDownCtx.getMarkDownAsHTMLOutput}}
	     >
	    </div>
     </div>
   ) 
};

export default MarkdownSanitized;
