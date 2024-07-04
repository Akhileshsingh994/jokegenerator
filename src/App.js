import React from 'react';
import Joke from './components/Joke';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>SMILING BINGO</h1>
            </header>
            <main>
                <Joke />
            </main>
            <footer>
                <p>Have a great day with some laughs!</p>
            </footer>
        </div>
    );
}

export default App;
