import React, { useEffect, useState } from 'react';
import { Author, Blog } from '../types/types';
import '../App.css';
import User from './User';
interface ICardProps {
    blog: Blog
}

const Card = ({blog}: ICardProps) => {
  const [author, setAuthor] = useState<Author>();
  useEffect(() => {
    const getAuth = async () => {
      const result = await fetch('https://dummyjson.com/users/' + blog.userId);
      const data = await result.json();
      setAuthor(data);
    }
    getAuth();
  }, []);

  return (
    <div className='card' key={blog.id}>
        <h3 className='title'>{blog.title}</h3>
        {author && <User author={author} />}
        <p className='paragraph'>{blog.body}</p>
        <div className='tags'>
            {blog.tags.map(tag => <label className='tag'>#{tag}</label>)}
        </div>
    </div>
  )
}

export default Card