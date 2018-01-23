/*
var currquest=0,
    score=0,
    questlen=0;

var main=document.getElementById('main'),
    question=document.getElementById('question'),
    opt1=document.getElementById('opt1'),
    opt2=document.getElementById('opt2'),
    opt3=document.getElementById('opt3'),
    opt4=document.getElementById('opt4'),
    nextbut=document.getElementById('nextbut'),
    result=document.getElementById('result');

function loadquestion(questionindex){
    var q=questions[questionindex];
    question.textContent=(questionindex+1)+'.'+q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
}

function loadnextquestion(){
    
   	var selectedOption =document.querySelector('input[type=radio]:checked'); 
    if(!selectedOption)
        alert('please select your answer');
    
    var answer=selectedOption.value;
    if(questions[currquest].answer == answer)
        score++;
    currquest++;
   
    
loadquestion(currquest)
}

loadquestion(currquest)

*/

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextbut');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		main.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);










