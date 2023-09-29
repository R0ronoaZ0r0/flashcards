
// if question is true display question else display answer
import PropTypes from 'prop-types';

const CardContent = ({index, question}) => {

        const content = [

                {'question1': 'Answer1'},
                {'question2': 'Answer2'},
                {'question3': 'Answer3'}

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