import {useEffect , useState} from 'react';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';


const useMarkdown = (text) => {
 const [markDown, setMarkDown] = useState(null);
 const md = new Remarkable().use(linkify)

  useEffect(() => {
    const interval = setInterval(() => {
      setMarkDown(md.render(text)); 
      console.log(typeof(md.render(text)));    
         
    }, 7000);
    return () => clearInterval(interval);
  }, [md, setMarkDown, text]);

  return markDown;

}

export default useMarkdown;