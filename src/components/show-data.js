import React from 'react';

import './styles/show-data.css';

import { Link } from 'react-router-dom';

export default function Showdata() {
  return (
    <div>
      <div>
        <h1>My Data</h1>
        <p>Your past 15 days</p>
        <Link to="/">
        <button>Home</button>
        </Link>
      </div>
      <div>
        <ul>
          <li onclick="" id="" >7/15</li>
          <li onclick="" id="" >7/14</li>
          <li onclick="" id="" >7/13</li>
        </ul>
      </div>
    </div>
  );
};