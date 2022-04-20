var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["Inside which HTML element do we put the JavaScript?", "js", "script", "javascript", "B"],
    ["Where is the correct place to insert a JavaScript?", "The head section", "The body section", "Both the head and the body section are correct", "C"],
    ["What is the correct syntax for referring to an external script called 'xxx.js'?", 'script src="xxx.js"', 'script href="xxx.js"', 'script name="xxx.js"', "A"]
];

function renderQuestion() {
    test = document.getElementById("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        document.getElementById("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    document.getElementById("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}
var timeCounter = 45
function startTimer() {
    var timer = setInterval (function () {
timeCounter = timeCounter-1
document.getElementById("timerDisplay").textContent=timeCounter
if (timeCounter <= 0) {
    clearInterval(timer)
}
    }, 1000)
}

function startQuiz(){
    startTimer()
    renderQuestion()
    
}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][4]) {
        correct++;
    }
    
    pos++;
    renderQuestion();
}

// window.addEventListener("load", renderQuestion, false);
document.getElementById("start").addEventListener("click", startQuiz)
