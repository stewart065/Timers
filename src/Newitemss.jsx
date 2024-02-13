import React, { useState } from 'react';

import "./style.css";
import Newform from './Newform';

const Newitemss = () => {

    const [todos, setTodos] = useState([])
    
    const addtodos = (title) => {
        setTodos((currenttodos) => {
            return [
                ...currenttodos,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        })
    }

    const toggletodos = (id, completed) => {
        setTodos(currenttodos => {
            return currenttodos.map(todos => {
                if (todos.id == id) {
                    return { ...todos, completed }
                }
                return todos
            })
        })
    }

    const deletetodos = (id) => {
        setTodos(currenttodos => {
            return currenttodos.filter(todos => todos.id !== id)
        })
    }

    return (
        <>
            <Newform />
        </>
    )
}

export default Newitemss

