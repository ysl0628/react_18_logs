import React, { useCallback, useEffect, useState } from 'react';
import StudentList from './components/StudentList';
import './App.css';
import StuContext from './store/StuContext';

// const STU_DATA = [
//   {
//     "id": 1,
//     "attributes": {
//         "name": "小明",
//         "gender": "男",
//         "age": 18,
//         "address": "台北市"
//     }
// },
// {
//     "id": 2,
//     "attributes": {
//         "name": "小華",
//         "gender": "男",
//         "age": 20,
//         "address": "新北市"
//     }
// },
// {
//     "id": 3,
//     "attributes": {
//         "name": "小翔",
//         "gender": "男",
//         "age": 19,
//         "address": "桃園市"
//     }
// }
// ]

export default function App() {

  const [stuData, setStuData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch("http://localhost:1337/api/students");
      if (response.ok) {
        const data = await response.json();
        setStuData(data.data);
      } else {
        throw new Error('數據加載失敗');
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const laodDataHandler = () => {
    fetchData();
  };

  return (
    <StuContext.Provider value={{fetchData}}>
      <div className='app'>
        <button onClick={laodDataHandler}>加載數據</button>
        {(!loading && !error) && <StudentList stus={stuData} />}
        {loading && <p>數據加載中...</p>}
        {error && <p style={{ color: "red", fontSize: "30px" }}>！數據加載異常！</p>}
      </div>
    </StuContext.Provider>
  )
}

