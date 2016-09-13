$(document).ready(function() {
//Quiz object
	var quiz = {
		name: "Health and Wellness",
		questions: [ 
			{
				text: "How much exercise is recommended per day?",
				answers: ["10 minutes", "30 minutes", "1 hour", "3 hours"],
				correct: 1
			},
			{
				text: 'How much &quot;biking&quot; is &quot;running&quot;? (ratio)',
				answers: ["2:1", "1:2", "3:1", "1:3"],
				correct: 2
			},
			{
				text: 'How much &quot;swimming&quot; is &quot;running&quot;? (ratio)',
				answers: ["1:4", "4:1", "2:1", "1:2"],
				correct: 0
			},
			{
				text: "What benefits do you get from exercising?",
				answers: ["Strengthens muscles", "Better sleep and mood", "keep bones strong", "all of the above"],
				correct: 3
			},
			{
				text: "If you are not motivated to work out, what are some ideas?",
				answers: ["Grab a buddy", "Set goals for self", "Hire trainer", "All of the above"],
				correct: 3
			},
			{
				text: "What's the main difference between free weights and machines?",
				answers: ["Machinese allow movement in one plane and isolates a muscle group", "Free weights require and improve balance and coordination", "Both a and b", "None of the above"],
				correct: 2
			},
			{
				text: "What is the main purpose of having a personal trainer?",
				answers: ["Stay motivated to workout", "Finding a soul mate", "Eye candy to workout with", "Someone to split post workout meal with"],
				correct: 0
			},
			{
				text: "What does diet have to do with exercising?",
				answers: ["Nothing", "Goes hand in hand", "I don't eat", "My family doesn't eat"],
				correct: 1
			},
			{
				text: "How do you stay active at a desk job?",
				answers: ["Take stairs", "Take frequent breaks", "Walk on lunch break", "All of the above"],
				correct: 3
			},
			{
				text: "Is walking considered exercising?",
				answers: ["absolutely", "Nah", "Just a little", "It's bad for you"],
				correct: 0
			}
		],
		displayQuestion: function(currentQuestion) {
			$("#questions").empty();
			$("#questions").append("<p>" + this.questions[currentQuestion].text + "</p>");
			$("#answers").empty();
			$.each(this.questions[currentQuestion].answers, function(index, value) {
				$("#answers").append("<input type='radio' name='answers' value='" +
					index+"' id='answers"+index+"'/>" + 
					"<label for='answers' class='answerLabel'"+index+"'>" + value + "</label>");
			});
			$("#answers").append("<button id='submit'>Submit</button>")
		}
	}
//global variables
	var currentQuestion = 0;
	var score = 0;
	quiz.displayQuestion(currentQuestion);
//submit, get answer, add score
	$(document).on("click","#submit",function() {
		//get value of selected radio button
		var selectedAnswer = $("input:checked").val();
		console.log(selectedAnswer);
		// var radioButton = $("answers"+index+":checked");
		// var radio = $(".answers"+index+"")
		// var userAnswer = radio.index(radioButton);
		// console.log(userAnswer);
		//compare value to correct answer
		//increment score

		if (selectedAnswer == quiz.questions[currentQuestion].correct) {
			score++;
		}
		console.log(score);
		nextQuestion();

		//call next question if question<length
		function nextQuestion() {		
			currentQuestion++;	
			if (currentQuestion < quiz.questions.length) {
				quiz.displayQuestion(currentQuestion);
			}
			else {
				displayResult();
			}
		}
		//The Score
		function displayResult() {
			$("#questions").empty();
			$("#questions").append(" Your Score is: " + score + " out of 10! ");
			$("#answers").empty();
			$("#answers").append("<button id='reset'>Start Over</button>");
		}
	})

	$(document).on("click","#reset",function() {
		window.location.reload();
	});
});

