
$(document).ready(function(){

	$("#intro").fadeIn(2000);
	$("#play_area").hide();
	$("#done").hide();

	$("#introgspic").click(function(e){
		e.preventDefault(); // prevent the click from happening. 
		$("#play_area").fadeIn(); // show play area
		$("#intro").fadeOut(); // hide the intro
	});


(questionList).forEach(function(currentQues) { // each question in questionList Array
	var possibleAnswers = currentQues.choices; // gabe: Array of choices for current question. Alternative syntax is: currentQues['choices']
	$("#quesForm").append('<li class="ask">' + currentQues.ask + '</li>'); // the question. gabe: added quotes around html string
	$("#quesForm").append('<input id="choices" type="radio">' + possibleAnswers + '<br>');

	// gabe: iterate over each possibleAnswer
	possibleAnswers.forEach(function(possibleAnswer) {
		var value = correntans == possibleAnswer ? 'right' : 'wrong';
		 // gabe: added quotes around html string. listed each possibleAns
	})

})
	


	/* ----- when shepherd clicked, play_area id shown, question_area and header classes shown, others hidden ------  */
				/* ----- question counter needs to be coded ------  */
				/* ----- first question displayed w choices ------  */

	/* ----- when submit button pushed, answer_area class comes in ------  */
			/*need to code evaluation of answers against one another*/
			/* ----- Next Question button hit moves on to new question removes old ques------  */

	/* ----- when submit pushed on last question, done class displayed------  */

			/* ----- play again button refreshes game ------  */


});


