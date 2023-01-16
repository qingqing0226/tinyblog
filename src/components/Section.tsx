import React from 'react';
import { Blog } from '../types/types';
import Card from './Card';
interface ISectionProps {
    blogs: Blog[]
}

let Section = ({blogs}: ISectionProps) => {
  return (
    <div>
        {blogs.map(b => <Card blog={b} />)}
    </div>
    
  )
}

export default Section