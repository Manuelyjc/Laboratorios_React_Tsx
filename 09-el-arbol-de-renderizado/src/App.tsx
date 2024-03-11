import React from 'react';
import FancyText from "./components/FancyText.tsx";
import InspirationGenerator from './components/InspirationGenerator';
import Copyright from './components/Copyright';

const App: React.FC = () => {
    return (
        <>
            <FancyText title={true} text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2004} />
            </InspirationGenerator>
        </>
    );
};

export default App;
