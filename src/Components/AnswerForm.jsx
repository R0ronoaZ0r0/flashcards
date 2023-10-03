import { useState } from "react";

const AnswerForm = () => {
    const [answer, setAnswer] = useState("");

    const handleOnSubmit = () => {
        
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
                <input type="submit"/>
            </form>
        </div>
    );

}

export default AnswerForm;