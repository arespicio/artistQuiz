
var questions = new Array;
// var userAnswer = 
var currentQuestionIndex

$(document).ready(function(){

	var question = new Question('Monet.jpg', 'Edouard Manet', 'Paul Cezanne', 'Claude Monet', 'Claude Monet');
	questions.push(question);

	question = new Question('degas.jpg', 'Edgar Degas', 'Henri Matisse', 'Edouard Manet', 'Edgar Degas');
	questions.push(question);

	question = new Question('cezanne.jpg', 'Pierre-Auguste Renoir', 'Paul Cezanne', 'Paul Gauguin', 'Paul Cezanne');
	questions.push(question);

	question = new Question('gauguin.jpg', 'Paul Gauguin', 'Pablo Picasso', 'Vincent van Gogh', 'Paul Gauguin');
	questions.push(question);

	question = new Question('pollock.jpg', 'Henri Matisse', 'Pablo Picasso', 'Jackson Pollock', 'Jackson Pollock');
	questions.push(question);

	question = new Question('vangough.jpg', 'Edouard Manet', 'Pierre-Auguste Renoir', 'Vincent van Gogh', 'Vincent van Gogh');
	questions.push(question);

	question = new Question('Renoir.jpg', 'Pierre-Auguste Renoir', 'Paul Cezanne', 'Henri Matisse', 'Pierre-Auguste Renoir');
	questions.push(question);

	question = new Question('matisses.stillLife.jpg', 'Henri Matisse', 'Vincent van Gogh', 'Paul Gauguin', 'Henri Matisse');
	questions.push(question);

	question = new Question('manet.railroad.jpg', 'Edgar Degas', 'Claude Monet', 'Edouard Manet', 'Edouard Manet');
	questions.push(question);

	question = new Question('picasso.jpg', 'Paul Gauguin', 'Pablo Picasso', 'Paul Cezanne', 'Pablo Picasso');
	questions.push(question);

	begin();
	
	$('#start').click(function() {
		game();
		
	});

	$('li').click(function(){
		userGuess(this); //variable this holds the li element that was clicked
		$('.next').show();
	});

	$('#next').click(function(){
		nextQuestion();
	});
	
});

function begin (){
	$('.intro').show();
	$('#picture').hide();
	$('#artist').hide();
	$('.next').hide();
}

function game (){
	currentQuestionIndex = 0;
	loadQuestionData();
	$('.intro').hide();
	$('#picture').show();
	$('.artist').show();
}

//loads new image and question on start
function loadQuestionData(){
	$('#questionImage').attr('src', 'images/' + getCurrentQuestion().imageFileName);
	$('#choice1').html(getCurrentQuestion().artist1);
	$('#choice2').html(getCurrentQuestion().artist2);
	$('#choice3').html(getCurrentQuestion().artist3);
}

function Question(imageFileName, artist1, artist2, artist3, correct) {
  this.imageFileName = imageFileName;
  this.artist1	     = artist1;
  this.artist2	     = artist2;
  this.artist3	     = artist3;
  this.correct		 = correct;
  this.userAnswer	 = "";
}

function dumpQuestions(){
	console.log('arrayLength:' + questions.length);
	for (var i = 0; i < questions.length; i++) {
		dumpQuestion(i);
	}
}

function dumpQuestion(questionIndex){
	var question = getQuestion(questionIndex);
		console.log('index:' + questionIndex);
		console.log('imageFileName:' + question.imageFileName);
		console.log('artist1:' + question.artist1);
		console.log('artist2:' + question.artist2);
		console.log('artist3:' + question.artist3);
		console.log('correct:' + question.correct);
		console.log('userAnswer' + question.userAnswer);
		console.log('');
}

function getQuestion(questionIndex){
	return questions[questionIndex];
}

function getCurrentQuestion(){
	return questions[currentQuestionIndex];
}

//Function for User's guess and outcome (correct or incorrect)
function userGuess(liThatWasClicked){
	console.log('The li you click contains ' + $(liThatWasClicked).html());
	getCurrentQuestion().userAnswer = $(liThatWasClicked).html();
	console.log('we entered the userGuess function');
	console.log('The correct answer is ' + getCurrentQuestion().correct);
	console.log('Your answer is ' + getCurrentQuestion().userAnswer);
	var isCorrect = getCurrentQuestion().correct == getCurrentQuestion().userAnswer
	console.log('Correct Answer? ' + isCorrect);

	if(isCorrect) {
		$('.artist').hide();
		$('.message').html('<strong>Correct.</strong>');
		$('#circle' + currentQuestionIndex).css('background-color', '#c3688c');
	}
	else{
		$('.artist').hide();
		$('.message').html('<strong>Incorrect.</strong>');
	}

	// dumpQuestion(currentQuestionIndex);
}

//Moves user on to next question when button is clicked
function nextQuestion(){
	currentQuestionIndex++;
}










