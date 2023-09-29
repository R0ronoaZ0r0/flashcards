import { useState } from "react";
import CardContent from "./CardContent";

import PropTypes from 'prop-types';

const Flashcards = () => {

    // index 0 is title
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(true);
    const [indexCount, setIndexCount] = useState(0);
    const [lastTenIndices, setLastTenIndices] = useState([]);

    const randomIndex = () => {
        // As index 0 is tile, we want to start at index 1
        // and end at index 10
        return Math.floor(Math.random() * 10) + 1;
    };

    const handleClick = () => {
        setQuestion(!question);
    };


    const handleNext = () => {
        console.log(lastTenIndices);
        setIndexCount(indexCount + 1);
        if (indexCount === 10) {
            setIndexCount(0);
            setLastTenIndices([]);
        }
        let newIndex = randomIndex();
        while (lastTenIndices.includes(newIndex)) {
            newIndex = randomIndex();
        }
        setIndex(newIndex);
        setQuestion(true);
        lastTenIndices.push(newIndex)
        setLastTenIndices(lastTenIndices);
        
    };

    return(
        <div>
            <h1>Flashcards</h1>
            <p>description</p>
            <div onClick={handleClick} className="flashcard">
                <CardContent index={index} question={question}/>
            </div>
            <button onClick={handleNext} className="next"> next </button>
        </div>
        
    );
};

Flashcards.propTypes = {
    index: PropTypes.number.isRequired
};

export default Flashcards;
