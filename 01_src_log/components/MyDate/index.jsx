import React from 'react';
import './index.css'

export default function MyDate({ date }) {
    return (
        <div>
            <div className="date">
                <div className="month">
                    {date.toLocaleString('zh-CN', {month:'long'})}
                </div>
                <div className="day">
                    {date.getDate()}
                </div>
            </div>
        </div>
    )
}
