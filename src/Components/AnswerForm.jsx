/* eslint-disable react/prop-types */
import { useState } from "react";

const AnswerForm = (props) => {
    const [answer, setAnswer] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(answer);
    }

    return(
        <div className="answer-form">
            <form onSubmit={handleOnSubmit}>
                <label>
                    Enter your answer: 
                    <input 
                        type="text" 
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        style={props.answerCSS}
                    />
                </label>
                <button type="submit" disabled={props.isSubmitDisabled}>submit</button>
            </form>
        </div>
    );

}

export default AnswerForm;