import React from 'react';
import Card from '../UI/Card';
import './index.css'

export default function Edit() {
  return (
    <Card className="edit">
        <form >
            <div className='editItem'>
                <label htmlFor="date">日期</label>
                <input type="date" id="date" />
            </div>
            <div className='editItem'>
                <label htmlFor="desc">內容</label>
                <input type="desc" id="text" />
            </div>
            <div className='editItem'>
                <label htmlFor="time">時間</label>
                <input type="time" id="time" />
            </div>
            <div className='editBtn'>
                <button>新增</button>
            </div>
        </form>
    </Card>
  )
}
