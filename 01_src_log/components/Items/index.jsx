import React from 'react';
import Content from '../Content';
import MyDate from '../MyDate';
import Card from '../UI/Card';
import './index.css'

export default function Item({date, desc, time}) {
  return (
      <Card className="item">
        {/* 日期容器 */}
        <MyDate date={date} />
        {/* 日誌內容器 */}
        <Content desc={desc} time={time} />
      </Card>
  )
}
