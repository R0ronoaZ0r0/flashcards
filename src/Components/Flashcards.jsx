import { useState } from "react";
import AnswerForm from "./AnswerForm";

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

    const content = [
        {'Start!': 'Click next to start!'},
        {'What does JSX stand for?' : 'JavaScript XML'},
        {'Inside which HTML element do we put the JavaScript?' : '<script>'},
        {'The external JavaScript file must contain the <script> tag. True or False?':'False'},
        {'JavaScript is the same as Java. True or False' : 'False'},
        {'How do you write "Hello World" in an alert box?' : 'alert("Hello World");'},
        {'How do you create a function in JavaScript?' : 'function myFunction()'},
        {'Which event occurs when the user clicks on an HTML element?' : 'onclick'},
        {'Which operator is used to assign a value to a variable?' : '='},
        {'How do you find the number with the highest value of x and y?' : 'Math.max(x, y)'},
        {'How can you detect the client\'s browser name?' : 'navigator.appName'}

    ];


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

    // const getContentArrayFromCardContent = (contentArray) => {
    //     setContentArray(contentArray);
    // }



    return(
        <div>
            <h1>Quiz on Javascript</h1>
            <p>
                Test your knowledge with our quiz! 
                Click on the card to reveal the answer. 
                Click next to move on to the next card. Good luck!
            </p>
            <p>Total number of cards displayed is {content.length - 1}</p>
            <div onClick={handleClick} className="flashcard">
                <div className="card-content">
                    {question ? (
                        <div className="question">{Object.keys(content[index])[0]}</div>
                    ) : (
                        <div className="answer">{Object.values(content[index])[0]}</div>
                    )}
                </div>
            </div>

            <AnswerForm answer={Object.values(content[index])[0]}/>
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
