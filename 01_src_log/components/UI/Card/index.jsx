import React from 'react';
import './index.css'

export default function Card(props) {
    console.log(props.children);
  return (
    <div className={`card ${props.className}`}>
        {props.children}
    </div>
  )
}
