import React, { useCallback, useContext, useState } from 'react';
import './index.module.css';
import StuContext from '../../../store/StuContext';
import Form from '../Form';

export default function Student({ stu, id }) {

  const { name, gender, age, address } = stu;

  const ctx = useContext(StuContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const deleteData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:1337/api/students/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        throw new Error("刪除失敗！")
      }
      // 刪除後需要觸發列表更新，需引入 App 中的 fetchData
      ctx.fetchData();
    } catch (error) {
      setError(true)

    } finally {
      setLoading(false);

    }
  }, [ctx, id])

  const deleteHandler = () => {
    // 刪除學生
    deleteData();
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit &&
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>
            <button onClick={deleteHandler}>刪除</button>
            <button onClick={() => { setIsEdit(true) }}>修改</button>
          </td>
        </tr>}
      {isEdit && <Form stu={stu} status={isEdit} onCancel={cancelEdit} id={id}/>}
      {loading && <tr><td colSpan={5}>數據刪除中...</td></tr>}
      {error && <tr><td colSpan={5}>數據刪除失敗</td></tr>}
    </>
  )
}
