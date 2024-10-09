import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

const App = () => {
    const [card, setCard] = useState(0);
    const [reset, setReset] = useState(false);
    const [longestStreak, setLongestStreak] = useState(0);
    const [currStreak, setCurrStreak] = useState(0);
    const [guess, setGuess] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [firstPass, setFirstPass] = useState(true);
    const [formBG, setFormBG] = useState("");

    const cardContent = [
        {
            difficulty: "easy",
            question: "READY TO START?",
            answer: "Click the next button. Good luck...",
            front_img: "",
            back_img: "",
            ans_key: "123456$dnkf12",
        },
        {
            difficulty: "easy",
            question: "Who was the first president of the United States?",
            answer: "George Washington",
            front_img: "",
            back_img: "/images/george-washington.png",
            ans_key: "gw",
        },
        {
            difficulty: "medium",
            question:
                "Which U.S. president was in office during the signing of the Civil Rights Act of 1964?",
            answer: "Lyndon B. Johnson",
            front_img: "",
            back_img: "/images/LBJ.png",
            ans_key: "lbj",
        },
        {
            difficulty: "hard",
            question:
                "Who was the only U.S. president to serve two non-consecutive terms?",
            answer: "Grover Cleveland",
            front_img: "",
            back_img: "/images/cleveland.png",
            ans_key: "cleve",
        },
        {
            difficulty: "easy",
            question: "What is the capital city of the United States?",
            answer: "Washington, D.C.",
            front_img: "",
            back_img: "/images/washington.png",
            ans_key: "dc",
        },
        {
            difficulty: "medium",
            question: "Which amendment to the Constitution abolished slavery?",
            answer: "The 13th Amendment",
            front_img: "",
            back_img: "",
            ans_key: "13",
        },
        {
            difficulty: "hard",
            question:
                "What was the name of the political scandal that led to the resignation of President Richard Nixon?",
            answer: "The Watergate Scandal",
            front_img: "",
            back_img: "",
            ans_key: "water",
        },
        {
            difficulty: "easy",
            question: "What is the highest court in the United States?",
            answer: "The Supreme Court",
            front_img: "",
            back_img: "/images/CourtBuilding.png",
            ans_key: "court",
        },
        {
            difficulty: "medium",
            question:
                "What year did women gain the right to vote in the United States?",
            answer: "1920",
            front_img: "/images/suffragettes.png",
            back_img: "",
            ans_key: "vote",
        },
        {
            difficulty: "hard",
            question: "In what year was the U.S. Constitution written?",
            answer: "1787",
            front_img: "/images/signing_constitution.png",
            back_img: "",
            ans_key: "consti",
        },
        {
            difficulty: "easy",
            question: "Who wrote the Declaration of Independence?",
            answer: "Thomas Jefferson",
            front_img: "",
            back_img: "/images/jefferson.png",
            ans_key: "jeff",
        },
    ];

    const answerKey = [
        ["gw", ["washington", "george washington", "gw"]],
        [
            "lbj",
            ["lyndon johnson", "lbj", "lyndon b. johnson", "lyndon b johnson"],
        ],
        ["cleve", ["grover cleveland", "cleveland", "gc"]],
        [
            "dc",
            [
                "washington, d.c.",
                "washington d.c.",
                "washington, dc",
                "washington dc",
                "washington",
                "dc",
                "d.c.",
                "d.c",
                "dc.",
            ],
        ],
        [
            "13",
            [
                "13",
                "13th",
                "thirteenth",
                "the 13th",
                "the thirteenth",
                "the thirteenth amendment",
                "the 13th amendment",
                "13th amendment",
                "thirteenth amendment",
            ],
        ],
        ["water", ["watergate", "watergate scandal", "the watergate scandal"]],
        ["court", ["supreme court", "the supreme court"]],
        ["vote", ["1920"]],
        ["consti", ["1787"]],
        ["jeff", ["jefferson", "thomas jefferson"]],
    ];

    const answerKeyMap = new Map(answerKey);

    const [questions, setQuestions] = useState(cardContent);

    const updateCardF = () => {
        if (firstPass) {
            discardQuestion();
            setFormBG("");
            setFirstPass(false);
            setReset(true);
            setCard(0);
            setSubmitted(false);
            setGuess("");
            setTimeout(() => setReset(false), 10);
            return;
        }
        setFormBG("");
        setReset(true);
        if (card === questions.length - 1) {
            setCard(0);
        } else {
            setCard(card + 1);
        }
        setSubmitted(false);
        setGuess("");
        setTimeout(() => setReset(false), 10);
    };

    const updateCardB = () => {
        setFormBG("");
        setReset(true);
        if (card > 0) {
            setCard(card - 1);
        } else {
            setCard(questions.length - 1);
        }
        setSubmitted(false);
        setGuess("");
        setTimeout(() => setReset(false), 10);
    };

    const updateQuestions = () => {
        setQuestions(shuffleArray(questions));
        setGuess("");
        setFormBG("");
    };

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!submitted) {
            let tempGuess = guess.toLowerCase().trim();
            let answers = answerKeyMap.get(questions[card].ans_key);
            for (let answer of answers) {
                if (tempGuess === answer) {
                    setCurrStreak(currStreak + 1);
                    if (currStreak >= longestStreak) {
                        setLongestStreak(longestStreak + 1);
                    }
                    setFormBG("correct");
                    break;
                } else {
                    setCurrStreak(0);
                    setFormBG("wrong");
                }
            }
            setSubmitted(true);
        }
    };

    const handleChange = (event) => {
        setGuess(event.target.value);
    };

    const discardQuestion = () => {
        if (questions.length > 1) {
            let tempQuestions = [...questions];
            tempQuestions.splice(card, 1);
            setQuestions(tempQuestions);
            if (card >= tempQuestions.length) {
                setCard(tempQuestions.length - 1);
            }
        } else {
            alert("! LAST QUESTION CANNOT BE DISCARDED !");
        }
    };

    return (
        <div className="App">
            <div className="header">
                <h1>American Political History Quiz</h1>
                <h2>How well do you know the political history of the US?</h2>
                <h4>Number of Cards: 10</h4>
                <h4>
                    CURRENT STREAK: {currStreak}, LONGEST STREAK:{" "}
                    {longestStreak}
                </h4>
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
                    <form className="guess-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="ENTER GUESS..."
                            value={guess}
                            onChange={handleChange}
                            className={formBG}
                        />
                        <button type="submit" className="submission-button">
                            SUBMIT
                        </button>
                    </form>
                    <button
                        onClick={updateCardB}
                        className={
                            questions[card].ans_key === "123456$dnkf12"
                                ? "hide"
                                : ""
                        }>
                        ⟵
                    </button>
                    <button onClick={updateCardF}>⟶</button>
                    <button
                        className="shuffle-button"
                        onClick={updateQuestions}>
                        SHUFFLE
                    </button>
                    <button
                        className="discard-button"
                        onClick={discardQuestion}>
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
