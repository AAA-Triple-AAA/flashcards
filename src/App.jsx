import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
    const [card, setCard] = useState(10);
    const [reset, setReset] = useState(false);

    const cardContent = [
        {
            difficulty: "easy",
            question: "Who was the first president of the United States?",
            answer: "George Washington",
            front_img: "",
            back_img: "/images/george-washington.png",
        },
        {
            difficulty: "medium",
            question:
                "Which U.S. president was in office during the signing of the Civil Rights Act of 1964?",
            answer: "Lyndon B. Johnson",
            front_img: "",
            back_img: "/images/LBJ.png",
        },
        {
            difficulty: "hard",
            question:
                "Who was the only U.S. president to serve two non-consecutive terms?",
            answer: "Grover Cleveland",
            front_img: "",
            back_img: "/images/cleveland.png",
        },
        {
            difficulty: "easy",
            question: "What is the capital city of the United States?",
            answer: "Washington, D.C.",
            front_img: "",
            back_img: "/images/washington.png",
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
            back_img: "/images/CourtBuilding.png",
        },
        {
            difficulty: "medium",
            question:
                "What year did women gain the right to vote in the United States?",
            answer: "1920",
            front_img: "/images/suffragettes.png",
            back_img: "",
        },
        {
            difficulty: "hard",
            question: "In what year was the U.S. Constitution written?",
            answer: "1787",
            front_img: "/images/signing_constitution.png",
            back_img: "",
        },
        {
            difficulty: "easy",
            question: "Who wrote the Declaration of Independence?",
            answer: "Thomas Jefferson",
            front_img: "",
            back_img: "/images/jefferson.png",
        },
        {
            difficulty: "easy",
            question: "READY TO START?",
            answer: "Click the next button. Good luck...",
            front_img: "",
            back_img: "",
        },
    ];

    const [questions, setQuestions] = useState(cardContent);

    const updateCardF = () => {
        setReset(true);
        if (card === 10) {
            setCard(0);
        }
        if (!(card >= 9)) {
            setCard(card + 1);
        }
        setTimeout(() => setReset(false), 10);
    };

    const updateCardB = () => {
        setReset(true);
        if (!(card <= 0)) {
            setCard(card - 1);
        }
        setTimeout(() => setReset(false), 10);
    };

    const updateQuestions = () => {
        setQuestions(shuffleArray(questions));
        setCard(0);
    };

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 2; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        console.log(array);
        return newArray;
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
                    difficulty={questions[card].difficulty}
                    question={questions[card].question}
                    answer={questions[card].answer}
                    back_img={questions[card].back_img}
                    front_img={questions[card].front_img}
                    reset={reset}
                />
                <div className="bar">
                    <form className="guess-form">
                        <input type="text" placeholder="ENTER GUESS..." />
                        <button type="submit" className="submission-button">
                            SUBMIT
                        </button>
                    </form>
                    <button
                        onClick={updateCardB}
                        className={card === 10 || card === 0 ? "hide" : ""}>
                        ⟵
                    </button>
                    <button
                        onClick={updateCardF}
                        className={card === 9 ? "hide" : ""}>
                        ⟶
                    </button>
                    <button
                        className="shuffle-button"
                        onClick={updateQuestions}>
                        SHUFFLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
