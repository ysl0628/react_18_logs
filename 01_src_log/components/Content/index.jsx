import React from 'react'
import './index.css'

export default function Content({ desc, time }) {
    return (
        <div className="content">
            <h2 className="desc">{desc}</h2>
            <p className="time">{time}分鐘</p>
        </div>
    )
}
