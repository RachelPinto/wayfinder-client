import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import './styles/show-data.css';

import { Link } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

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
          <li onClick="" id="" >7/15</li>
          <li onClick="" id="" >7/14</li>
          <li onClick="" id="" >7/13</li>
        </ul>
      </div>
    </div>
  );
};