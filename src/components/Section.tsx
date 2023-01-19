import React from 'react';
import { Blog } from '../types/types';
import Card from './Card';
import '../App.css';
interface ISectionProps {
    blogs: Blog[],
    section: string
}

let Section = ({blogs, section}: ISectionProps) => {
  return (
      <details className={section}>
        <summary>{section}</summary>
        {blogs.map(b => <Card blog={b} />)}
      </details>
  )
}

export default Section