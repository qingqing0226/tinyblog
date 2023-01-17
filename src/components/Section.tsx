import React from 'react';
import { Blog } from '../types/types';
import Card from './Card';
interface ISectionProps {
    blogs: Blog[],
    section: string
}

let Section = ({blogs, section}: ISectionProps) => {
  return (
    <div>
      <details>
        <summary>{section}</summary>
        {blogs.map(b => <Card blog={b} />)}
      </details>
        
    </div>
    
  )
}

export default Section