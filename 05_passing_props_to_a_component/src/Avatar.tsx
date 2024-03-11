import React from 'react';
import { getImageUrl } from './Utils.tsx';
import './App.css'
interface Person {
    name: string;
    imageId: string;
}

interface AvatarProps {
    person: Person;
    size: number;
}

const Avatar: React.FC<AvatarProps> = ({ person, size }) => {
    return (
        <>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />

            {/*<sub>{person.name} </sub>*/}
        </>

    );
};

export default Avatar;