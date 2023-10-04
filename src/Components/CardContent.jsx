
// if question is true display question else display answer
import PropTypes from 'prop-types';

const CardContent = ({index, question}) => {

    const content = [
        {'Start!': 'Click next to start!'},
        {'What does JSX stand for?' : 'JavaScript XML.'},
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