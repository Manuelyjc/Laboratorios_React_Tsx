import React from 'react';

interface CupProps {
    guest: number;
}

const Cup: React.FC<CupProps> = ({ guest }) => {
    return <h2>Tea cup for guest #{guest}</h2>;
};

const TeaSet: React.FC = () => {
    return (
        <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </>
    );
};

export default TeaSet;
