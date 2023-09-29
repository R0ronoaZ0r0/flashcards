
// if question is true display question else display answer
import PropTypes from 'prop-types';

const CardContent = ({index, question}) => {

        const content = [
                {'title': 'Flashcards'},
                {'question1': 'Answer1'},
                {'question2': 'Answer2'},
                {'question3': 'Answer3'},
                {'question4': 'Answer4'},
                {'question5': 'Answer5'},
                {'question6': 'Answer6'},
                {'question7': 'Answer7'},
                {'question8': 'Answer8'},
                {'question9': 'Answer9'},
                {'question10': 'Answer10'}

        ];

        return (
                <div className="card-content">
                    {question ? (
                        <div className="question">{Object.keys(content[index])[0]}</div>
                    ) : (
                        <div className="answer">{Object.values(content[index])[0]}</div>
                    )}
                </div>
            );
};

CardContent.propTypes = {
    index: PropTypes.number.isRequired,
    question: PropTypes.bool.isRequired
};

export default CardContent;