import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";

const Card = ({ question, answer, difficulty, front_img, back_img, reset }) => {
    const [side, setSide] = useState("front");

    const updateSide = () => {
        if (side === "front") {
            setSide("back");
        } else {
            setSide("front");
        }
    };

    useEffect(() => {
        if (reset) {
            setSide("front");
        }
    }, [reset]);

    const backClasses = "card " + difficulty + " " + back_img + " " + "back";
    const frontClasses = "card " + difficulty + " " + front_img + " " + "front";

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
