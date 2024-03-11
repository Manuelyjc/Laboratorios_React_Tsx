
import FancyText from './components/FancyText';
import InspirationGenerator from './components/InspirationGenerator';
import Copyright from './components/Copyright';
import './App.css';

const App: React.FC = () => {
    return (
        <>
            <FancyText title text="Get Inspired App" />
            <InspirationGenerator />
            <Copyright year={2004} />
        </>
    );
};

export default App;
