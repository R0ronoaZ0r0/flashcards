/* eslint-disable react/prop-types */
import { useState } from "react";

const AnswerForm = (props) => {
    const [answer, setAnswer] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(answer === props.answer) {
            alert("Correct!");
        }
        else {
            alert("Incorrect!");
        }
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Enter your answer:
                    <input 
                        type="text" 
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    );

}

export default AnswerForm;