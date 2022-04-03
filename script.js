function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
   
        var myQuestions = [
            {

                question: "Inside which HTML element do we put the JavaScript?",
                answers: {
                    a: 'js',
                    b: 'script?',
                    c: 'javascript',
                    d: 'scripting'
                },
                correctAnswer: 'b'
            },
            {
                question: "Where is the correct place to insert a JavaScript?",
                answers: {
                    a: 'The <head> section',
                    b: 'The <body> section',
                    c: 'Both the <head> and the <body> section are correct'
                },
                correctAnswer: 'c'
            },
            {
                question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                answers: {
                    a: '<script src="xxx.js">',
                    b: '<script href="xxx.js">',
                    c: '<script name="xxx.js">'
                },
                correctAnswer: 'a'
            }
    
    ];
}
    function showQuestions(questions, quizContainer) {

    var output = [];
    var answers;


    //for each question...
    for (var i = 0; i < questions.length; i++) {
        //first reset the list of answers
        answers = [];

        //for each available answer to this question...
        for (letter in questions[i].answers) {

            //add an html radio button
            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ':'
                + questions[i].answers[letter]
                + '<label>'
            );
        }
        //add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );

    }

    //combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
    }

    //show the questions
    showQuestions(questions, quizContainer);

  







function showResults(questions, quizContainer, resultsContainer) {
    //gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    //for each question...
    for (var i = 0; i < questions.length; i++) {

        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        //if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            //add to the number of correct answers
            numCorrect++;

            //color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        //if answer is wrong or blank
        else {
            //color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    //show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}



//when user click submit, show results
submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
}



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);



