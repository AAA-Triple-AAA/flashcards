import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
    const [card, setCard] = useState(0);
    const [reset, setReset] = useState(false);

    const cardContent = [
        {
            difficulty: "easy",
            question: "Who was the first president of the United States?",
            answer: "George Washington",
            front_img: "",
            back_img: "/public/images/george-washington.png",
        },
        {
            difficulty: "medium",
            question:
                "Which U.S. president was in office during the signing of the Civil Rights Act of 1964?",
            answer: "Lyndon B. Johnson",
            front_img: "",
            back_img: "/public/images/LBJ.png",
        },
        {
            difficulty: "hard",
            question:
                "Who was the only U.S. president to serve two non-consecutive terms?",
            answer: "Grover Cleveland",
            front_img: "",
            back_img: "/public/images/cleveland.png",
        },
        {
            difficulty: "easy",
            question: "What is the capital city of the United States?",
            answer: "Washington, D.C.",
            front_img: "",
            back_img: "/public/images/washington.png",
        },
        {
            difficulty: "medium",
            question: "Which amendment to the Constitution abolished slavery?",
            answer: "The 13th Amendment",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "hard",
            question:
                "What was the name of the political scandal that led to the resignation of President Richard Nixon?",
            answer: "The Watergate Scandal",
            front_img: "",
            back_img: "",
        },
        {
            difficulty: "easy",
            question: "What is the highest court in the United States?",
            answer: "The Supreme Court",
            front_img: "",
            back_img: "/public/images/CourtBuilding.png",
        },
        {
            difficulty: "medium",
            question:
                "What year did women gain the right to vote in the United States?",
            answer: "1920",
            front_img: "/public/images/suffragettes.png",
            back_img: "",
        },
        {
            difficulty: "hard",
            question: "In what year was the U.S. Constitution written?",
            answer: "1787",
            front_img: "/public/images/signing_constitution.png",
            back_img: "",
        },
        {
            difficulty: "easy",
            question: "Who wrote the Declaration of Independence?",
            answer: "Thomas Jefferson",
            front_img: "",
            back_img: "/public/images/jefferson.png",
        },
    ];

    const updateCard = () => {
        setReset(true);
        if (card === cardContent.length - 1) {
            setCard(0);
        } else {
            setCard(card + 1);
        }
        setTimeout(() => setReset(false), 10);
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
                    reset={reset}
                />
                <button onClick={updateCard}>⟶</button>
            </div>
        </div>
    );
};

export default App;
