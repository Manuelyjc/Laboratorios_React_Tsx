import React from 'react';

// Define una interfaz Props que especifica la estructura de las props que se esperan en el componente
interface Props {
    year: number; // La prop year debe ser un número
}

// Define el componente funcional Copyright utilizando la sintaxis de arrow function
const Copyright: React.FC<Props> = ({ year }) => {
    // Retorna un elemento de párrafo (<p>) que muestra el año pasado
    return <p className='small'>©️ {year}</p>;
};

// Exporta el componente Copyright para que pueda ser utilizado en otros archivos
export default Copyright;
