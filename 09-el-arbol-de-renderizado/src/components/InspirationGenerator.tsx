import React, { useState } from 'react';
import Quotes from "./Quotes.tsx"; // Importa un archivo llamado "Quotes.tsx" que contiene una lista de citas inspiradoras
import FancyText from "./FancyText.tsx"; // Importa el componente "FancyText" que se utiliza para mostrar el texto de manera estilizada

// Define una interfaz InspirationGeneratorProps que especifica la estructura de las props que se esperan en el componente
interface InspirationGeneratorProps {
    children?: React.ReactNode; // La prop children es opcional y puede contener cualquier nodo de React
}

// Define el componente funcional InspirationGenerator utilizando la sintaxis de arrow function
const InspirationGenerator: React.FC<InspirationGeneratorProps> = ({ children }) => {
    // Define un estado local "index" utilizando el hook useState. El estado inicial es 0.
    // "index" se utiliza para determinar qué cita se mostrará actualmente de la lista de citas.
    const [index, setIndex] = useState<number>(0);

    // Obtiene la cita actual del array "Quotes" utilizando el índice actual.
    // "Quotes" es un array de strings que contiene las citas inspiradoras.
    const quote: string = Quotes[index];

    // Define una función "next" que se ejecutará cuando se haga clic en el botón "Inspire me again".
    // Incrementa el índice para mostrar la próxima cita en la lista de citas, y se asegura de que
    // el índice no exceda la longitud del array utilizando el operador módulo (%).
    const next = () => setIndex((index + 1) % Quotes.length);

    // Retorna un fragmento de React que contiene el texto de la cita inspiradora,
    // un botón para obtener una nueva cita, y cualquier nodo hijo que se pase como prop.
    return (
        <>
            <p>Your inspirational quote is:</p>
            {/* Utiliza el componente FancyText para mostrar la cita de manera estilizada */}
            <FancyText text={quote} />
            <button onClick={next}>Inspire me again</button>
            {/* Renderiza cualquier nodo hijo que se haya pasado como prop */}
            {children}
        </>
    );
};

// Exporta el componente InspirationGenerator para que pueda ser utilizado en otros archivos
export default InspirationGenerator;
