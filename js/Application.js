
$(document).ready(function loaded (){

	// Intro class shown; img with instructions to click. Other classes hidden

	$("#intro").fadeIn(2000);
	$("#play_area").hide();
	$("#done").hide();


	$("#introgspic").click(function introduction (e){
		e.preventDefault(); // prevent the click from happening. 
		$("#intro").fadeOut(); // hide the intro
		$("#play_area").fadeIn(); // show play area
		$("#answer_area").hide();
	});

	var lastQuestion = questionList[4];
	var currentQuesIndex = 0;
	var currentQues = questionList[currentQuesIndex];
	var displayTheQues = function () {$("#questions").append('<li class="ask">' + currentQues.ask + '</li>')};
	var displayAnsChoices = function () {
			currentQues.choices.forEach(function getEachAnsChoice (ansChoice) {
			$("#questions").append('<input name="choices" type="radio" value="'+ansChoice+'">' + ansChoice + '<br>')})
		};	
	var removeTheQues = function() { $("#questions").empty();
		};
	var removeTheAns = function() { $("#answer").empty();
		$("#facts").empty();
		};
	var numCorrect = 0;
	var displayQuesCounterIndex = 1;
	var displayQuesCounter = function () {$("#cur_quest_num").append(displayQuesCounterIndex)};

		displayTheQues();
		displayAnsChoices();
		displayQuesCounter();


	var uponSubmit = $("#subbtn").click(function checkAns (){
			$("#question_area").hide(); 
			$("#answer_area").show();
			
			var chosenAns = $("input[name='choices']:checked").val();
			var correctAnswer = currentQues.correctAns[0];

				if (chosenAns == correctAnswer) {
					$("#answer").text("You are correct!");
					$("#facts").append(currentQues.info);
					$("#numQuesCorrect").empty();
					$("#numQuesCorrect").append(numCorrect += 1);
				}

				else {
					$("#answer").append("Sorry, you are incorrect.  The correct answer is " + correctAnswer);
					$("#facts").append(currentQues.info);
				}
		});

	// User clicks for next question
	var uponNext = $("#nextbtn").click(function nextQues (){
		$("#answer_area").fadeOut();

		if (lastQuestion == currentQues) {
				$("#done").fadeIn();
			$("#rsbtn").click(function playAgain (){
				location.reload();
			})
		}
		
		else {
			removeTheQues();
			removeTheAns();

			currentQuesIndex++; //increment	
			currentQues = questionList[currentQuesIndex];//re-reference to change the current question

			displayQuesCounterIndex += 1;
			$("#cur_quest_num").empty();
			displayQuesCounter();

			$("#question_area").show();
			displayTheQues();
			displayAnsChoices();
			}		
	});



/*
	var quesLoop = 
	displayTheQues.fadeIn();
	displayAnsChoices.fadeIn();
	uponSubmit;
	uponNext;
*/
	
		 

})
	