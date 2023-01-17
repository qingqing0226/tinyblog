import React from 'react';
import { Blog } from '../types/types';
import '../App.css';
interface ICardProps {
    blog: Blog
}

const Card = ({blog}: ICardProps) => {
  return (
    <div className='card' key={blog.id}>
        <h3 className='title'>{blog.title}</h3>
        <p className='paragraph'>{blog.body}</p>
        <div className='tags'>
            {blog.tags.map(tag => <label className='tag'>#{tag}</label>)}
        </div>
    </div>
  )
}

export default Card