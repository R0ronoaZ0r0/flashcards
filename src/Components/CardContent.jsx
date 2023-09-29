
// if question is true display question else display answer
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

export default CardContent;