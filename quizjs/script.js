const quizDB = [
    {
        question: "Q1 : When an operator's value is NULL, the typeof returned by the unary operator is : ",
        a: "Boolean",
        b: "Undifined",
        c: "Object",
        d: "Integer",
        ans: "ans3"
    },
    {
        question: "Q2 : Javascript is an _____ language ? ",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q3 : Which of the following keyword is used to define a variable in javascript ? ",
        a: "var",
        b: "let",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q4 : How can a datatype be declared to be a constant type ? ",
        a: "var",
        b: "const",
        c: "let",
        d: "constant",
        ans: "ans2"
    },
    {
    question: "Q5 : What is the full form of JS ? ",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}


loadQuestion();

const getCheckedAnswer = () => {
    let answer;
    
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else
    {
        showScore.innerHTML=`
            <h3>You scored ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }

});