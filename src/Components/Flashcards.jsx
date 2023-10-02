import { useState } from "react";
import CardContent from "./CardContent";

import PropTypes from 'prop-types';

const Flashcards = () => {

    // index 0 is title
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(true);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [backButtonDisabled, setBackButtonDisabled] = useState(true);

    let currIndex = index; 

    // const randomIndex = () => {
    //     // As index 0 is tile, we want to start at index 1
    //     // and end at index 10
    //     return Math.floor(Math.random() * 10) + 1;
    // };

    const handleClick = () => {
        setQuestion(!question);
    };


    const handleNext = () => {
        setIndex(index + 1);
        setQuestion(true); 
        currIndex++;   
        buttonsDisabledHandle(); 
    };

    const handleBack = () => {
        setIndex(index - 1);
        setQuestion(true);  
        currIndex--; 
        buttonsDisabledHandle(); 
    };

    const buttonsDisabledHandle = () => {
        if (currIndex === 10) {
            setNextButtonDisabled(true);
        } else {
            setNextButtonDisabled(false);
        }

        if (currIndex === 0) {
            setBackButtonDisabled(true);
        } else {
            setBackButtonDisabled(false);
        }
    };



    return(
        <div>
            <h1>Quiz on HTML, CSS and React</h1>
            <p>
                Test your knowledge with our quiz! 
                Click on the card to reveal the answer. 
                Click next to move on to the next card. Good luck!
            </p>
            <p>Total number of cards displayed is 10</p>
            <div onClick={handleClick} className="flashcard">
                <CardContent index={index} question={question}/>
            </div>

            <div className="backNextButtonsContainer">              
                <button onClick={handleBack} className="back" disabled={backButtonDisabled}> &#8592; </button>
                <button onClick={handleNext} className="next" disabled={nextButtonDisabled}> &#8594; </button>
            </div>
            
        </div>
        
    );
};

Flashcards.propTypes = {
    index: PropTypes.number.isRequired
};

export default Flashcards;
