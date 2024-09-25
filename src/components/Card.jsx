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

    const backClasses = "card " + difficulty + " " + backimg;
    const frontClasses = "card " + difficulty + " " + frontimg;

    return side === "front" ? (
        <div className={frontClasses} onClick={updateSide}>
            <p>QUESTION</p>
        </div>
    ) : (
        <div className={backClasses} onClick={updateSide}>
            <p>ANSWER</p>
        </div>
    );
};

export default Card;
