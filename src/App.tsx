import React, {useState, useEffect} from 'react';
import './App.css';
import Section from './components/Section';
import { Blog } from './types/types';
import { Github } from 'react-bootstrap-icons';

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
      <h2 className='header'>Tiny Blog</h2>
      {sections.map(section => {
        const blogs = allBlogs.filter(b => b.tags.includes(section));
        return <Section blogs={blogs} section={section}/>
      })}
      <footer>
        <a href='https://github.com/qingqing0226'><Github className='github' /><span>{' '}&#169;{'Qingqing Dai'}</span></a>
      </footer>
    </div>
  );
}

export default App;
