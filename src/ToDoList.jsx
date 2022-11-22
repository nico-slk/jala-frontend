import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ToDoList() {
    const [toDo, setToDo] = useState([
        "Comer",
        "Cocinar",
        "Dormir"
    ]);
    const [item, setItem] = useState("")

    const handleChange = e => {
        if (e.target.value.trim() !== "") setItem(e.target.value);
    }

    const addNewItem = () => {
        let toDoList = toDo;
        if (toDoList.indexOf(item) !== -1) return
        if (item !== "") toDoList.push(item)
        setToDo(toDoList)
        setItem("")
    }

    const deleteElement = (event, item) => {
        event.preventDefault();
        setToDo(
            toDo.filter(el => el !== item)
        )
    }

    useEffect(() => {
        console.log(toDo)
    }, [toDo])


    return (
        <div className='container mt-10'>
            <input type="text" name="input" id="inp" onChange={handleChange} value={item} />
            <input type="button" name="Add item" id="add-button" value="Add" onClick={addNewItem} />
            <div className='container'>
                <div className='row'>
                    <ul>
                        {toDo.map(e =>
                            <li key={`${e}`} className="list-item" >
                                {e} <input type="button" value="Delete" onClick={(event) => deleteElement(event, e)} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
