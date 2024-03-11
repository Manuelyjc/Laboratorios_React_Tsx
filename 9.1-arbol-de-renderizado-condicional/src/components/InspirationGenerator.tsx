import React, { useState, ReactNode } from 'react';
import inspirations from './inspirations';
import FancyText from './FancyText';
import Color from './Color';

interface Inspiration {
    type: string;
    value: string;
}

interface InspirationGeneratorProps {
    children?: ReactNode;
}

const InspirationGenerator: React.FC<InspirationGeneratorProps> = ({ children }) => {
    const [index, setIndex] = useState<number>(0);
    const inspiration: Inspiration = inspirations[index];
    const next = () => setIndex((index + 1) % inspirations.length);

    return (
        <>
            <p>Your inspirational {inspiration.type} is:</p>
            {inspiration.type === 'quote' ? (
                <FancyText text={inspiration.value} />
            ) : (
                <Color value={inspiration.value} />
            )}

            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    );
};

export default InspirationGenerator;
