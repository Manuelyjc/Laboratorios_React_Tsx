import React from 'react';

// Define una interfaz FancyTextProps que especifica la estructura de las props que se esperan en el componente
interface FancyTextProps {
    title?: boolean; // La prop "title" es opcional y se espera que sea un booleano
    text: string; // La prop "text" es requerida y se espera que sea una cadena de texto
}

// Define el componente funcional FancyText utilizando la sintaxis de arrow function
const FancyText: React.FC<FancyTextProps> = ({ title, text }) => {
    // Retorna un elemento de encabezado (<h1> o <h3>) dependiendo del valor de la prop "title"
    // Si "title" es verdadero, retorna un elemento de encabezado <h1> con la clase "fancy title".
    // De lo contrario, retorna un elemento de encabezado <h3> con la clase "fancy cursive".
    return title
        ? <h1 className='fancy title'>{text}</h1>
        : <h3 className='fancy cursive'>{text}</h3>;
};

// Exporta el componente FancyText para que pueda ser utilizado en otros archivos
export default FancyText;
