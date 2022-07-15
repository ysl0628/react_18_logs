import React from 'react';
import Student from './Student';
import Form from './Form';
import './index.module.css'

export default function StudentList({ stus, status }) {
    return (
        <table>
            <caption>學生列表</caption>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性別</th>
                    <th>年齡</th>
                    <th>地址</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                {
                    stus.map(item => <Student key={item.id} stu={item.attributes} id={item.id} />)
                }
            </tbody>
            <tfoot>
                <Form />
            </tfoot>
        </table>
    )
}
