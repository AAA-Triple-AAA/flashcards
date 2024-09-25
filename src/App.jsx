import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <h1>American Political History Quiz</h1>
                <h3>How well do you know the political history of the US?</h3>
                <p>Number of Cards: 10</p>
            </div>
            <div className="card-container">
                <Card />
                <button>⟶</button>
            </div>
        </div>
    );
};

export default App;
