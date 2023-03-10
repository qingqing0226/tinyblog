import React, { useState } from 'react';
import { Author } from '../types/types';
import '../App.css';
import Popup from 'reactjs-popup';

interface IAuthorProps {
    author: Author
}

const User = ({author}: IAuthorProps) => {
  const [open, setOpen] = useState(false);
  const closePop = () => setOpen(false);
  return (
    <>
    <div onClick={() => setOpen(true)} className='author-name'>{author.firstName + ' ' + author.lastName}</div>
    <Popup
      arrow={false}
      modal nested
      open={open}
      closeOnDocumentClick
      onClose={closePop}
    >
      <div className='user'>
        <div className='heading'>
          <h3 className='name'>{author.firstName + ' ' + author.lastName}</h3>
          <button className='close-button' onClick={closePop}>X</button>
        </div>
        <hr  />
        <div className='user-container'>
          <div className='image-container'>
            <img src={author.image} alt={author.firstName} className='author-image' />
          </div>
          <div className='user-details'>
            <p>Age: {author.age}</p>
            <p>Email: {author.email}</p>
            <p>Phone: {author.phone}</p>
            <p>Birth Date: {author.birthDate}</p>
            <p>Address: {author.address.address + ' ' + author.address.city}</p>
          </div>
        </div>
      </div>
    </Popup></>
  )
}

export default User;