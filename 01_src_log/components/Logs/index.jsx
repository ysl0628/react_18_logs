import React from 'react';
import Item from '../Items';
import './index.css';
import { v4 } from 'uuid';
import Card from '../UI/Card';

const logsData = [
    {
      id: v4(),
      date: new Date(),
      desc: "學習前端",
      time: "50"
    },
    {
      id: v4(),
      date: new Date(),
      desc: "學習 JS",
      time: "20"
    },
    {
      id: v4(),
      date: new Date(),
      desc: "學習 React",
      time: "30"
    }
  ]


export default function Logs() {
  return (
    <Card className="logs">
    {
      // date={new Date()} desc={"學習前端"} time={"50"}
      logsData.map(item =>  <Item key={item.id} {...item}/> )
    }
  </Card>
  )
}
