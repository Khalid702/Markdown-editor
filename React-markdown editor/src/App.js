import MarkdownSanitized from './components/MarkdownSanitized';
import RawInputArea from './components/RawInputArea';

import './App.css';

const App = () => {

 return (
  <div className="App">
    <RawInputArea />
    <MarkdownSanitized />
  </div>
  );
};

export default App;
