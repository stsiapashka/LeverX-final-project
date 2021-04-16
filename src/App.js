import './App.css';
import Header from './components/Header/Header'
import {HomePage} from "./components/HomePage/HomePage";

function App() {
    return (
        <div className="website">
            <Header />
            <div className="page">
                <HomePage/>
            </div>
        </div>
    );
}

export default App;
