// Variables
	// For the increase in [i]
	var count =0;
	// Keeping Correct score
	var correct = 0;
	// Keeping wrong score
	var wrong = 0;
	// Amount of Time for each quesion
	var timeCount = 31;
	// Time counter interval for counting down time in question page
	var counter;
	// Time counter timeout for displaying the Answer page
	var delayTimer;

	// Array for the questions and answers
	var questionSet = [ 
		
		{
			// question
			question: "1. What is the most popular dog breed in the  U.S.?",
			// index of the correct answer in the array below used for displaying correct answer in the answer page
			correctAnswerNdx : 2,
			// answer choices 
			// and its true or false value that will later be set as data attribute to the div that contains it to determine whether or not it is correct
			answers:
					[
						{
							answer: "Poodle",
							isCorrect: "false"
						},
						{
							answer:"Beable",
							isCorrect: "false"
						},
						{
							answer: "Labrador retriever",
							isCorrect: "true"
						},
						{
							answer: "German Shepherd dog",
							isCorrect: "false"
						}
					]
			

		},

		{
			question: "2. Where does the boxer gets its name?",
			correctAnswerNdx : 2,
			answers:
					[
						{
							answer: "The breed was used in China's Boxer Rebellion",
							isCorrect: "false"
						},
						{
							answer:"Its paw markings resemble boxing gloves",
							isCorrect: "false"
						},
						{
							answer: "It stands on its hind legs and boxes",
							isCorrect: "true"
						},
						{
							answer: "From the German word for loyal",
							isCorrect: "false"
						}
					]
			

		},

		{
			question: "3. Which of these senses is the most accute for a dog?",
			correctAnswerNdx : 2,
			answers:
					[
						{
							answer: "Sight",
							isCorrect: "false"
						},
						{
							answer:"Hearing",
							isCorrect: "false"
						},
						{
							answer: "Smell",
							isCorrect: "true"
						},
						{
							answer: "Taste",
							isCorrect: "false"
						}
					]
			

		},

		{
			question: "4. What historical figure was the first to introduce Japanese 			Akitas to the U.S.?",
			correctAnswerNdx : 2,
			
			answers:
					[
						{
							answer: "Thomas Jefferson",
							isCorrect: "false"
						},
						{
							answer:"Marilyn Monroe",
							isCorrect: "false"
						},
						{
							answer: "Helen Keller",
							isCorrect: "true"
						},
						{
							answer: "Billy the Kid",
							isCorrect: "false"
						}
					]
			

		},

		{
			question: "5. What kind of dog was Toto from the wizard of Oz?",
			correctAnswerNdx : 1,
			answers:
					[
						{
							answer: "Lhasa Apso",
							isCorrect: "false"
						},
						{
							answer:"Cairn terrier",
							isCorrect: "true"
						},
						{
							answer: "Maltese",
							isCorrect: "false"
						},
						{
							answer: "Pomeranian",

							isCorrect: "false"
						}
					]
			

		} 


	]; // questionSet array

// Reset Function
	function reset(){

	 	// set [i] =0
		count = 0;
		// set correct score to 0
		correct = 0;
		// set wrong score to 0 
		wrong = 0;

		// and call the startTime fuction to start counting down time and display the first question
		startTime();

	} //reset function


// Function to start countion down timeCount by second by calling nextQustion function every 1 second, which will call displayQuestion function to decrement time

		function startTime(){
			counter = setInterval(nextQuestion, 1000);

		}

// Function to control the timeout page after displaying question page

		function nextQuestion(){
			
		    // call the question page function
		    displayQuestion();

			
		    // if the question displayed is not the last question and the time left is equal to zero, to 
			if((count != (questionSet.length -1)) && (timeCount == 0)) {
				
				// increase the [i] for the next question
				count++;
				// increase the wrong score
				wrong++;
				// play losing sound
				playlosesound();
				// stop and reset time timer
				clearInterval(counter);
				timeCount = 31;
				// display the timeout page
				timeOutPage();

			}

			  // if the question displayed is the last question and the time left is equal to zero, to 
			if((count == (questionSet.length - 1)) && (timeCount == 0)){
				
				// increase the wrong score
				wrong++;

				// stop and reset time timer
				clearInterval(counter);
				timeCount=31;

				// display the restart page
				reStartPage();

			}
			
		} // nextQuestion Function



// Question Page Function

		function displayQuestion(){

		    // Start to count down the time form 30 seconds
		    timeCount --;

		    // Show the timer in the Browser
			$("#timer").html("<h1>Time Left : <span class='red'>" + timeCount + "</span> seconds</h1>");
			// Show the question in the Browser
			$("#question").html("<h2>" + questionSet[count].question + "</h2>");
			//empty this div
			$("#reStartCorrect").empty();
			// Show the answer choice 1 in the Browser 
			$("#choice1").html(questionSet[count].answers[0].answer);
				// Set data attribute to the div that contains this answer choice 
				$("#choice1").data("isCorrect", questionSet[count].answers[0].isCorrect);
			// Show the answer choice 2 in the Browser 
			$("#choice2").html(questionSet[count].answers[1].answer );
				// Set data attribute to the div that contains this answer choice 
				$("#choice2").data("isCorrect", questionSet[count].answers[1].isCorrect);
			// Show the answer choice 3 in the Browser 
			$("#choice3").html( questionSet[count].answers[2].answer );
				// Set data attribute to the div that contains this answer choice 
				$("#choice3").data("isCorrect", questionSet[count].answers[2].isCorrect);
			// Show the answer choice 4 in the Browser 
			$("#choice4").html(questionSet[count].answers[3].answer );
				// Set data attribute to the div that contains this answer choice 
				$("#choice4").data("isCorrect", questionSet[count].answers[3].isCorrect);
			
			// Empty the div so the restart button does not show in the question page
			$("#reStart").empty();

			// Empty all these div
			$("#reStartCorrect").empty();
			$("#totalScore").empty();
			$("#imageCheck").empty();
			$("#correctScore").empty();
			$("#wrongScore").empty();
			$("#correctAnswer").empty();

	
		}


// Timeout Page Function
		function timeOutPage(){

			// Show the user that time is up in place of the question in the Browser
			$("#reStartCorrect").html("<h1><br><br>TIME IS UP</h1>");
			//empty this div
			$("#question").empty();
			$("#totalScore").empty();
			$("#imageCheck").empty();
			$("#correctScore").empty();
			$("#wrongScore").empty();
			// Empty all answer choices
			$("#choice1").empty();
			$("#choice2").empty();
			$("#choice3").empty();
			$("#choice4").empty();

			// Replace answer choice with the correct answer
			$("#correctAnswer").html("<h2>Correct Answer: " + questionSet[count-1].answers[questionSet[count-1].correctAnswerNdx].answer + "</h2>");
			
			// Empty the div so the restart button does not show in the question page
			$("#reStart").empty();

			// Display this page for 5 seconds and call clearDelay function
		    delayTimer = setTimeout(clearDelay, 5 * 1000);	
	
		} // timeOut Function



// Function to control the display of the next question
		function clearDelay(){

			//clear the 5 seconds timeout
			clearTimeout(delayTimer);

			//call startTime to display the next question and starting the timer
			startTime();

		} // clearDelay function


// Function to chect the correctness of each answer
		function answerCheck(){

			//when an answer choices is click
			$("#choice1, #choice2, #choice3, #choice4").on("click", function(e){
				
				//increase the[i]
				count++;

				//if the data attrubute of the clicked div is true and it is not the last question
				if (($(this).data('isCorrect') == "true") && (count != questionSet.length)){
					
					//increase the correct score
					correct ++;

					//play the winning sound
					playwinsound();
					
					//clear and reset the timer
					clearInterval(counter);
					timeCount = 31;
					
					// call correctPage Function
					correctPage();

				}

				//if the data attrubute of the clicked div is false and it is not the last question
				else if(($(this).data('isCorrect') == "false") && (count != questionSet.length)) {
					// increae the wrong score
					wrong ++;
					
					//play losing sound
					playlosesound();
					
					//clear and reset timer
					clearInterval(counter);
					timeCount = 31;
					
					//call wrongPage Function
					wrongPage();
			}
				//if the data attrubute of the clicked div is true and it is the last question
				if ((count == questionSet.length) && ($(this).data('isCorrect') == "true")) {
				
				//clear and reset timer
				clearInterval(counter);
				timeCount=31;

				//increase the correct score
				correct++;
				
				//play the winning sound
				playwinsound();

				//call reStartPage Function
				reStartPage();

			} 
			//if the data attrubute of the clicked div is false and it is the last question
			else if ((count == questionSet.length) && ($(this).data('isCorrect') == "false")){

				//clear and reset timer
				clearInterval(counter);
				timeCount=31;
				
				// increae the wrong score
				wrong++;
				
				//play the losing sound
				playlosesound();

				//call reStartPage Function
				reStartPage();

			}

			}) // on click

		} // answerCheck


// Function for correct answer page
		function correctPage() {
			//Empty the  div
			$("#question").empty();
			$("#reStartCorrect").empty();
			$("#totalScore").empty();
			$("#wrongScore").empty();
			$("#correctScore").empty();

			//Display the correct image
			$("#imageCheck").html("<img src = ' assets/images/correct.png' width='200px' />");
			
			// Empty answer choices
			$("#choice1").empty();
			$("#choice2").empty();
			$("#choice3").empty();
			$("#choice4").empty();
			
			// Display the correct answer
			$("#correctAnswer").html("<h2>Correct Answer  :  " + questionSet[count-1].answers[questionSet[count-1].correctAnswerNdx].answer + "</h2>");
	
			// Empty the div so the restart button does not show in the page
			$("#reStart").empty();

			// Display this page for 5 seconds and call clearDelay function
			delayTimer = setTimeout(clearDelay, 5 * 1000);

		} // correctPage Function


// Function for wrong answer page
		function wrongPage() {

			//Empty the  div
			$("#question").empty();
			$("#reStartCorrect").empty();
			$("#totalScore").empty();
			$("#wrongScore").empty();
			$("#correctScore").empty();

			//Display the correct image
			$("#imageCheck").html("<img src = ' assets/images/wrong.png' width='200px' />");
			
			// Empty answer choices
			$("#choice1").empty();
			$("#choice2").empty();
			$("#choice3").empty();
			$("#choice4").empty();
			
			// Display the correct answer
			$("#correctAnswer").html("<h2>Correct Answer  :  " + questionSet[count-1].answers[questionSet[count-1].correctAnswerNdx].answer + "</h2>");
	
			// Empty the div so the restart button does not show in the page
			$("#reStart").empty();

			// Display this page for 5 seconds and call clearDelay function
			delayTimer = setTimeout(clearDelay, 5 * 1000);
		
		} //wrongPage Function



//Function for summary score page and restart
	function reStartPage(){
			//Empty Timer
			$("#timer").empty();
			// Display the correct answer for the very last question
			$("#reStartCorrect").html("Correct Answer: "  + questionSet[count -1].answers[questionSet[count -1].correctAnswerNdx].answer);
			//empty this div
			$("#question").empty();
			// Display Total Score
			$("#totalScore").html("Total Score");
			//empty this div
			$("#imageCheck").empty();
			$("#correctAnswer").empty();
			$("#choice1").empty();
			//Display the correct score
			$("#correctScore").html("<h2>Correct  :  " + correct + "</h2>");
			//empty this div
			$("#choice2").empty();			
			$("#choice3").empty();
			//Display the wrong score
			$("#wrongScore").html("<h2>Wrong  :  " + wrong + "</h2>");
			//empty this div
			$("#choice4").empty();

			// creat vairable for the restart button
			var reStartButton = $("<button>");
			reStartButton.html("START OVER");
			// target restear div and display the button
			$("#reStart").append(reStartButton);
			// when the button is click, call the reset function
			reStartButton.on("click", reset);

	} // reStartPage function


// Function of Winning sound
		
		function playwinsound (){
			
			var audioElement = $("#winSound");
			audioElement.get(0).play();

		}

		// Function of Losing sound
		function playlosesound(){
			
			var audioElement = $("#loserSound");
			audioElement.get(0).play();
			
		}




//When the page loads
$(document).ready(function(){

//call these function to start timer, show question, and response to click
startTime();
answerCheck();


});



	
