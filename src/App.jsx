import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
    const [card, setCard] = useState(0);

    const cardContent = [
        {
            difficulty: "easy",
            question: "QUESTION1",
            answer: "ANSWER1",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "medium",
            question: "QUESTION2",
            answer: "ANSWER2",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "hard",
            question: "QUESTION3",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "easy",
            question: "QUESTION4",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "medium",
            question: "QUESTION5",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "hard",
            question: "QUESTION6",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "easy",
            question: "QUESTION7",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "medium",
            question: "QUESTION8",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "hard",
            question: "QUESTION9",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "easy",
            question: "QUESTION10",
            answer: "ANSWER3",
            front_img: "",
            back_img: "",
        },
    ];

    const updateCard = () => {
        if (card === cardContent.length - 1) {
            setCard(0);
        } else {
            setCard(card + 1);
        }
    };

    return (
        <div className="App">
            <div className="header">
                <h1>American Political History Quiz</h1>
                <h2>How well do you know the political history of the US?</h2>
                <h4>Number of Cards: 10</h4>
            </div>
            <div className="card-container">
                <Card
                    difficulty={cardContent[card].difficulty}
                    question={cardContent[card].question}
                    answer={cardContent[card].answer}
                    back_img={cardContent[card].back_img}
                    front_img={cardContent[card].front_img}
                />
                <button onClick={updateCard}>⟶</button>
            </div>
        </div>
    );
};

export default App;
