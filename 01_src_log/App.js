import React from 'react';
import Logs from './components/Logs';
import Edit from './components/Edit';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Edit />
      <Logs />
    </div>
  )
}

