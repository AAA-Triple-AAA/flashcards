// import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <h1>American Political History Quiz</h1>
                <h2>How well do you know the political history of the US?</h2>
                <h4>Number of Cards: 10</h4>
            </div>
            <div className="card-container">
                <Card
                    difficulty={"hard"}
                    question={"QUESTION"}
                    answer={"ANSWER"}
                />
                <button>⟶</button>
            </div>
        </div>
    );
};

export default App;
