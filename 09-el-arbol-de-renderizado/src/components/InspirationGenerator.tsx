import React, { useState } from 'react';
import Quotes from "./Quotes.tsx";
import FancyText from "./FancyText.tsx";

interface InspirationGeneratorProps {
    children?: React.ReactNode;
}

const InspirationGenerator: React.FC<InspirationGeneratorProps> = ({ children }) => {
    const [index, setIndex] = useState<number>(0);
    const quote: string = Quotes[index];
    const next = () => setIndex((index + 1) % Quotes.length);

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} />
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    );
};

export default InspirationGenerator;

