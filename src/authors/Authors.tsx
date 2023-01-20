import React from 'react';
import User from '../components/User';
import { Author } from '../types/types';

interface IAuthorsProps {
    authors: Author[]
}

const Authors = ({authors}: IAuthorsProps) => {
  return (
    <div className='authors'>
        {authors.map(a => <li key={a.id} className='author' ><User author={a} /></li>)}
    </div>
  )
}

export default Authors;