// Importa la biblioteca React
import React from 'react';

// Importa los estilos CSS para este componente
import './App.css';

// Define una interfaz para el tema, que incluye colores de fondo y texto
interface Theme {
    backgroundColor: string;
    color: string;
}

// Define una interfaz para una persona, que incluye un nombre y un tema
interface Person {
    name: string;
    theme: Theme;
}

// Define un objeto de persona con nombre y tema
const person: Person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};


// Define un componente funcional TodoList
const TodoList: React.FC = () => {
    return (
        // Renderiza una sección de lista de tareas con el tema de la primera persona
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

// Exporta el componente TodoList para su uso en otros archivos
export default TodoList;
