import React from 'react';
import './App.css'
interface Theme {
    backgroundColor: string;
    color: string;
}

interface Person {
    name: string;
    theme: Theme;
}

const person: Person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const TodoList: React.FC = () => {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
};

export default TodoList;
