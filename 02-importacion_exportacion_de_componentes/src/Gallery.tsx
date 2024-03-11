import React from 'react';
import Profile from './Profile';

interface GalleryProps {
    // Propiedades adicionales aquí, si las hay
}

const Gallery: React.FC<GalleryProps> = () => {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
};

export default Gallery;

