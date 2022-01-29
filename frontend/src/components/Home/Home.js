import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/book.jpg';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book Management System</h1>
          <p>Manage your Books with Ease...</p>
          <p>This Application is solemnly made for the assignment purpose @<a href='https://www.linkedin.com/company/walbury-technolabs/'>Walbury Techno-Labs</a></p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
