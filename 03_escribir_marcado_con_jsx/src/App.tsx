import React from 'react';
import './App.css';

interface TodoListProps {} // Define props interface for future extensibility

const TodoList: React.FC<TodoListProps> = () => {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </>
    );
};

export default TodoList;
