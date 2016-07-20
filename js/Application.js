
$(document).ready(function loaded (){

	// Intro class shown; img with instructions to click. Other classes hidden

	$("#intro").fadeIn(2000);
	$("#play_area").hide();
	$("#done").hide();

	// User clicks on img, fades out intro class, fades in first ques via play area class

	$("#introgspic").click(function introduction (e){
		e.preventDefault(); // prevent the click from happening. 
		$("#intro").fadeOut(); // hide the intro
		$("#play_area").fadeIn(); // show play area
		$("#answer_area").hide();
	});

	//Play area
	//Ask user a question
	
	var totalQuestions = questionList.length;
	var currentQues = questionList[0];
	var displayTheQues = $("#questions").append('<li class="ask">' + currentQues.ask + '</li>');
	var displayAnsChoices = currentQues.choices.forEach(function getEachAnsChoice (ansChoice) {
			$("#questions").append('<input id="choices" type="radio">' + ansChoice + '<br>')
			});


	// displayTheQues;
	// displayAnsChoices;

	//User Submits Answer

	var uponSubmit = $("#subbtn").click(function checkAns (){
			$("#question_area").hide(); 
			$("#answer_area").show();
			
			var chosenAns = $("input[id='choices']:checked").val();
			var correctAnswer = currentQues.correctAns[0];

				if (chosenAns == correctAnswer) {
					$("#answer").text("You are correct!");
					$("#facts").append(currentQues.info);
				}

				else {
					$("#answer").append("Sorry, you are incorrect.  The correct answer is " + correctAnswer);
					$("#facts").append(currentQues.info);
				}
		})

	// User clicks for next question
	var uponNext = $("#nextbtn").click(function nextQues (){
			$()	
		})


	var quesLoop = 
	displayTheQues.fadeIn();
	displayAnsChoices.fadeIn();
	uponSubmit;
	uponNext;

	
		 

})
	