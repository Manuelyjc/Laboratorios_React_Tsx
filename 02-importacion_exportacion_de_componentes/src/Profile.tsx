import React from 'react';

interface ProfileProps {
    // Propiedades adicionales aquí, si las hay
}

const Profile: React.FC<ProfileProps> = () => {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
};

export default Profile;
