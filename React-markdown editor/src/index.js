import React from 'react';
import ReactDOM from 'react-dom';
import MarkDownProvider from './context/MarkDownProvider';


import './index.css';
import App from './App';

ReactDOM.render(
 <MarkDownProvider>	
	<App />
 </MarkDownProvider>, document.getElementById('root'));
