import React, { useContext } from 'react';
import markDownContext from '../context/markDown-context';
import style from './rawInputArea.module.css';
const RawInputArea = () => {
  const markDownCtx = useContext(markDownContext);
  const inputHandler = (e) => {
    markDownCtx.handleChangeRawInputedText(e.target.value);
  } 

 return (
   <div className={style.inputArea}>  
     <h2>Enter MarkDown</h2>
     <textarea
        className={style.textarea} 
        onChange={inputHandler}>
     </textarea>
    </div>
  );
};

export default RawInputArea;
