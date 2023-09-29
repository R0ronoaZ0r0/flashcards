
// if question is true display question else display answer
import PropTypes from 'prop-types';

const CardContent = ({index, question}) => {

        const content = [
                {'Start!': 'Click next to start!'},
                {'What does JSX stand for?' : 'JSX stands for JavaScript XML.'},
                {'What is the purpose of the className attribute in JSX?' : 'The className attribute is used to specify the CSS class name(s) for an element in JSX.'},
                {'What is the purpose of the style attribute in JSX?' : 'The style attribute is used to specify the inline CSS styles for an element in JSX.'},
                {'What is the purpose of the alt attribute in HTML?' : 'The alt attribute is used to specify alternative text for an image in HTML.'},
                {'What is the purpose of the href attribute in HTML?'  :'The href attribute is used to specify the URL of the page that the link goes to in HTML.'},
                {'What is the purpose of the display property in CSS?' : 'The display property is used to specify the display behavior of an element in CSS.'},
                {'What is the purpose of the margin property in CSS? ': 'The margin property is used to specify the margin (space) around an element in CSS.'},
                {'What is the purpose of the padding property in CSS?' : 'The padding property is used to specify the padding (space) inside an element in CSS.'},
                {'What is the purpose of the border property in CSS?' : 'The border property is used to specify the border around an element in CSS.'},
                {'What is the purpose of the box-sizing property in CSS?' : 'The box-sizing property is used to specify how the total width and height of an element is calculated in CSS.'}

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