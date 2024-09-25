import React from "react";
import "./Card.css";
import { useState } from "react";

const Card = ({ question, answer, difficulty, frontimg, backimg }) => {
    const [side, setSide] = useState("front");

    const updateSide = () => {
        if (side === "front") {
            setSide("back");
        } else {
            setSide("front");
        }
    };

    const backClasses = "card " + difficulty + " " + backimg + " " + "back";
    const frontClasses = "card " + difficulty + " " + frontimg + " " + "front";

    return side === "front" ? (
        <div className={frontClasses} onClick={updateSide}>
            <p>{question}</p>
        </div>
    ) : (
        <div className={backClasses} onClick={updateSide}>
            <p>{answer}</p>
        </div>
    );
};

export default Card;
