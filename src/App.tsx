import React, {useState, useEffect} from 'react';
import './App.css';
import Section from './components/Section';
import { Blog } from './types/types';


function App() {
  const [allBlogs, setAllBlogs] = useState<Array<Blog>>([]);
  const [blogs, setBlogs] = useState<Array<Blog>>([]);
  const [section, setSection] = useState("history");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSection(value);

  }
  
  useEffect(() => {
    const getData = async () => {
      const results = await fetch('https://dummyjson.com/posts');
      const data = await results.json();
      setAllBlogs(data.posts);
      const temp = allBlogs.filter(b => b.tags.includes('history'));
      setBlogs(temp);
    }

    getData();
  }, []);

  useEffect(() => {
    const temp = allBlogs.filter(b => b.tags.includes(section));
    setBlogs(temp);
  }, [section]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tiny Blog</h2>
        <div>
          <select value={section} onChange={handleChange}>
            <option value="history">History</option>
            <option value="crime">crime</option>
            <option value="fiction">fiction</option>
            <option value="magical">magical</option>
            <option value="mystery">mystery</option>
          </select>
          <p>{section}</p>
        </div>
      </header>
      <Section blogs={blogs} />
    </div>
  );
}

export default App;
