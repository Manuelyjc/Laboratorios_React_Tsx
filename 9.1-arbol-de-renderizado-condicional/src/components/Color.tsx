import React from 'react';

interface ColorProps {
    value: string;
}

const Color: React.FC<ColorProps> = ({ value }) => {
    return <div className="colorbox" style={{ backgroundColor: value }} />;
};

export default Color;
