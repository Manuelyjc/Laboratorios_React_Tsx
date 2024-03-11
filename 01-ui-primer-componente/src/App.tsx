// Importa la biblioteca React
import React from 'react';

// Importa los estilos CSS para este componente
import "./styles.css"

// Define una interfaz para las props de Profile
interface ProfileProps {
    src: string; // URL de la imagen
    alt: string; // Texto alternativo de la imagen
}

// Define un componente funcional Profile que muestra una imagen con la URL y el texto alternativo proporcionados
const Profile: React.FC<ProfileProps> = ({ src, alt}) => {
    return (
        // Renderiza una etiqueta de imagen con la URL y el texto alternativo proporcionados
        <img src={src} alt={alt}/>
    );
};

// Define una interfaz para las props de Gallery
interface GalleryProps {
}

// Define un componente funcional Gallery que muestra una sección con un título y tres perfiles de científicos
const Gallery: React.FC<GalleryProps> = () => {
    return (
        // Renderiza una sección con la clase "container"
        <section className='container'>
            {/* Renderiza un título */}
            <h1>Científicos increíbles</h1>
            {/* Renderiza tres perfiles de científicos */}
            <Profile src='https://i.imgur.com/MK3eW3As.jpg' alt='Katherine Johnson'/>
            <Profile src='https://i.imgur.com/QIrZWGIs.jpg' alt='Alan L. Hart'/>
            <Profile src='https://i.imgur.com/yXOvdOSs.jpg' alt='Hedy Lamarr'/>
        </section>
    );
};

// Exporta el componente Gallery para que pueda ser utilizado en otros archivos
export default Gallery;
