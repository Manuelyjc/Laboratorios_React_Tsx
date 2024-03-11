import React from 'react';
import "./styles.css"
interface ProfileProps {
    src: string;
    alt: string;
}

const Profile: React.FC<ProfileProps> = ({ src, alt}) => {
    return (
        //<img src={src || "https://i.imgur.com/MK3eW3As.jpg"} alt={alt || "Katherine Johnson"} />
        <img src={src} alt={alt}/>
    );
};

interface GalleryProps {
}

const Gallery: React.FC<GalleryProps> = () => {
    return (
        <section>
            <h1>Científicos increíbles</h1>
            {/*<Profile src='' alt=''/>*/}
            <Profile src='https://i.imgur.com/MK3eW3As.jpg' alt='Katherine Johnson'/>
            <Profile src='https://i.imgur.com/QIrZWGIs.jpg' alt='Alan L. Hart'/>
            <Profile src='https://i.imgur.com/yXOvdOSs.jpg' alt='Hedy Lamarr'/>
        </section>
    );
};

export default Gallery;
