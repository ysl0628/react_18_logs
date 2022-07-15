import React, { useCallback, useContext, useState } from 'react';
import classes from './index.module.css';
import StuContext from '../../../store/StuContext';

export default function Form({ stu, status, onCancel, id }) {

    const [inputData, setInputData] = useState({
        name: stu ? stu.name : '',
        gender: stu ? stu.gender :"男",
        age: stu ? stu.age :'',
        address: stu ? stu.address :'',
    });

    const ctx = useContext(StuContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addInputData = useCallback(async (newData) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("http://localhost:1337/api/students", {
                method: 'post',
                body: JSON.stringify({ data: newData }),
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (!res.ok) { throw new Error('數據增加失敗') };
            ctx.fetchData();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [ctx])

    const updateData = useCallback(async (id, newData) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`http://localhost:1337/api/students/${id}`, {
                method: 'put',
                body: JSON.stringify({ data: newData }),
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (!res.ok) { throw new Error('數據增加失敗') };
            ctx.fetchData();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [ctx])

    const nameHandler = (e) => {
        setInputData(preState => ({ ...preState, name: e.target.value }))
    };
    const genderHandler = (e) => {
        setInputData(preState => ({ ...preState, gender: e.target.value }))
    };
    const ageHandler = (e) => {
        setInputData(preState => ({ ...preState, age: e.target.value }))
    };
    const addressHandler = (e) => {
        setInputData(preState => ({ ...preState, address: e.target.value }))
    };
    const addInputHandler = () => {
        addInputData(inputData);
    };

    const updateHandler = () => {
        updateData(id, inputData);
    }

    return (
        <>
            <tr className={classes.Form}>
                <td><input
                    onChange={nameHandler}
                    type="text"
                    value={inputData.name} />
                </td>
                <td>
                    <select
                        onChange={genderHandler}
                        value={inputData.gender}>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td><input
                    onChange={ageHandler}
                    value={inputData.age}
                    type="number" /></td>
                <td><input
                    onChange={addressHandler}
                    value={inputData.address}
                    type="text" /></td>
                <td>
                    {!status && <button onClick={addInputHandler}>新增</button>}
                    {status && 
                    <>
                    <button onClick={updateHandler}>確認</button>
                    <button onClick={onCancel}>取消</button>
                    </>
                    }
                </td>
            </tr>
            {loading && <tr><td colSpan={5}>數據新增中...</td></tr>}
            {error && <tr><td colSpan={5}>數據新增失敗</td></tr>}
        </>
    )
}
