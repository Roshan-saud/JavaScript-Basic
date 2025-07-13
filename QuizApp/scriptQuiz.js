const questions = [
     {
        question: "Which property is used in CSS to change text color?",
        answers: [
            {text: "font-style", correct: false},
            {text: "text-align", correct: false},
            {text: "color", correct: true},
            {text: "background-color", correct: false}
        ]
    },
    {
        question: "What command is used to upload local repository content to GitHub?",
        answers: [
            {text: "git upload", correct: false},
            {text: "git commit", correct: false},
            {text: "git push", correct: true},
            {text: "git init", correct: false}
        ]
    },
   {
        question: "Which keyword is used to define a function in Python?",
        answers: [
            {text: "function", correct: false},
            {text: "def", correct: true},
            {text: "func", correct: false},
            {text: "define", correct: false}
        ]
    },
    {
        question: "Which of the following is a type of machine learning?",
        answers: [
            {text: "Controlled learning", correct: false},
            {text: "Sequential learning", correct: false},
            {text: "Linked learning", correct: false},
            {text: "Supervised learning", correct: true}
        ]
    },
    {
        question: "Which key is used to uniquely identify a record in a database table?",
        answers: [
            {text: "Foreign key", correct: false},
            {text: "Primary key", correct: true},
            {text: "Candidate key", correct: false},
            {text: "Composite key", correct: false}
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    // answerButtons.innerHTML = "";
   
    let currentQuestion = questions[currentQuestionIndex]; //For question which is being asked right now
    let questionNo = currentQuestionIndex + 1; //For S.N. of current question
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question


    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");  //Create a button element 
        button.innerHTML = answer.text; //Adding text(i.e. answer's of question) to the button
        button.classList.add("btn"); // In above button 'btn' class is added
        answerButtons.appendChild(button); //In div(answer-button) each button are added
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();