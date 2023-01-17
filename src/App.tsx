import React, {useState, useEffect} from 'react';
import './App.css';
import Section from './components/Section';
import { Blog } from './types/types';

const sections = ['history', 'crime', 'fiction', 'magical', 'mystery'];

function App() {
  const [allBlogs, setAllBlogs] = useState<Array<Blog>>([]);

  
  useEffect(() => {
    const getData = async () => {
      const results = await fetch('https://dummyjson.com/posts');
      const data = await results.json();
      setAllBlogs(data.posts);
    }

    getData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h2>Tiny Blog</h2>
      </header>

      {sections.map(s => {
        const bs = allBlogs.filter(b => b.tags.includes(s));
        return <Section blogs={bs} section={s}/>
      })}
    </div>
  );
}

export default App;
