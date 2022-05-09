// This the JS for the second page of my website
// Created by Farnood Tajbakhsh




//Our slides
let slides = document.getElementsByClassName("mySlides");
//Our dots
let dots = document.getElementsByClassName("dot");

//Current carousel index. Basically, what slide are we currently looking at? 1, 2 other?
let slideIndex = 1;
//This function will run the show slide function with the current index (in the beginning, it's 1).
window.onload = showSlides(slideIndex);

// Next/previous controls
//If this function is run with 1, you will go forward one slide
//If this function is run with -1, you will go back one slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
//This will force the slide to be n
//It will also set slideIndex to n so we don't mess up the order
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//This function will display the slide n 
function showSlides(n) {
	//If slide index exceeds the limit, reset it to the first slide
	if (n > slides.length) {slideIndex = 1}
	//If slide index goes below 1, reset it to the last slide
	if (n < 1) {
		slideIndex = slides.length
	}
	
	//A small for loop that sets all the slides display to none. Including the one we want to display currently!
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	

	
	//Set slide you want to display to block display. This will show the current slide. The rest remain invisble.
	slides[slideIndex-1].style.display = "block";
	

}

// Code use to get the popup
var popup = document.getElementById("mypopupG1");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("mImage");
var popupImg = document.getElementById("Gimg1");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}


//flip-card-btn-turn-to-back'
//Animations
// this event occurs when the html has been completely loaded
document.addEventListener('DOMContentLoaded', function(event) {

// make the start button visible
    document.getElementById('start').style.visibility = 'visible';
// When the button is clicked initiate the 'flip' motion
    document.getElementById('start').onclick = function() {

    document.getElementById('flip-card').classList.toggle('do-flip');
    };
  
});


// quiz
// select all elements
// This will help us find all elements needed for our quiz such as divisions and sections we will need to update.
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const tryAgain = document.getElementById("tryAgain");

// create our questions
//This is an array of question objects, each of them having the following fields:
//question for the question prompt text
//imgSrc for the path to the image we must take
//choiceA, choiceB and choiceC for the options you can take
//correct for the right option out of the aforementioned 3
let questions = [
    {
        question : "Which era does the guitar on the left belong to?",
        imgSrc : "https://thedutchluthier.files.wordpress.com/2020/09/118702865_237577487562195_2149221179930278378_n.jpg?w=750",
        choiceA : "Romantic",
        choiceB : "Baroque",
        choiceC : "Renaissance",
        correct : "A"
    },{
        question : "What were guitar strings in the Baroque era made out of?",
        imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTErWvswMyngAXk_tbiAP7r5KVfOMoAlqP3VeyY3SNdU0YUix0BJu3IL2ps3ragmU7Wk&usqp=CAU",
        choiceA : "Nylon",
        choiceB : "Gut",
        choiceC : "Steel",
        correct : "B"
    },{
        question : "Sound vibrations first transmit to this guitar part: ",
        imgSrc : "https://mammothmemory.net/images/user/base/music/guitar/bridge-and-saddle-in-guitar-music.7c74a87.jpg",
        choiceA : "The Body",
        choiceB : "The Bridge",
        choiceC : "The Saddle",
        correct : "C"
    },{
        question : "Which instrument did the classical guitar originate from?",
        imgSrc : "https://cdn.britannica.com/40/133040-050-E52EF706/European-lute.jpg",
        choiceA : "The Vihuela",
        choiceB : "The Lute",
        choiceC : "The Banjo",
        correct : "B"

    }
];



// create some variables
//Make a variable to store the index of the last question for easier access later
const lastQuestion = questions.length - 1;
//This variable determines the index of the current question. We start with 0 to indicate that it's the first.
let runningQuestion = 0;
//This will be our counter variable.
let count = 0;
//This will determine how much time we are allowed to take per question
const questionTime = 10; // 10s
//Determine the total width of the graphical gauge in pixels
const gaugeWidth = 150; // 150px
//Determine the unit for the gauge so we can move it up every time the timer calls its function
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
//Set score to 0
let score = 0;

// render a question
function renderQuestion(){
	//We make a temporary variable q to address our current question in our question object.
    let q = questions[runningQuestion];
    
	//Set the question element on our page to display the question prompt
    question.innerHTML = "<p>"+ q.question +"</p>";
	//Display the image for the quiz question
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
	//Establish choice A
    choiceA.innerHTML = q.choiceA;
    //Establish choice B
	choiceB.innerHTML = q.choiceB;
	//Establish choice C
    choiceC.innerHTML = q.choiceC;
}

//Add a mouse click event listener to the start element on our page.
start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
	//When you start the quiz, disable the button so that it can only be clicked once
    start.disabled = true;
   	start.style.cursor = "default";
   	start.classList.remove("h1Hover");
	//Render the first question
    renderQuestion();
	//Make sure the quiz is displaying
    quiz.style.display = "block";
	//Render the dots
    renderProgress();
	//Render the counter on the quiz
    renderCounter();
	//Make a timer that will run the renderCounter function every second.
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
//This is where we create those white dots that will turn green or red depending on the right or wrong answer.
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
//This will trigger every 1 second while a question is running.
function renderCounter(){
	//If the timer count is less than the time we have for the question
    if(count <= questionTime){
		//Display the current count on the counter display
        counter.innerHTML = count;
		//Set the timer gauge to display properly using the gauge unit and the count
        timeGauge.style.width = count * gaugeUnit + "px";
		//Add 1 to the count
        count++
    }
	//If we ran out of time
	else {
		//Reset the timer count
        count = 0;
        // change progress color to red
        answerIsWrong();
		//If this was not the last question, keep going to the next one
        if (runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }
		//If this was the last question
		else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
	//Reset the current count.
    count = 0;
	//If the quiz isn't over yet (so if the running question is NOT the last question, move on to the next question and display it.
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    //If the answer is right, set the current circle on the quiz to green.
	document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
	//If the answer is wrong, set the current circle on the quiz to red.
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
	
	//Display the score division (it is invisble by default)
    scoreDiv.style.display = "block";
	//Make the try again button appear (it is invisible by default AND gets hidden by retry)
    tryAgain.style.display = "block";
  

    // calculate the amount of question percent answered by the user
    scorePerCent = Math.round(100 * score/questions.length);
    

    
	//Add text representing the percentage to the score division.

    scoreDiv.innerHTML = "<p>Final Score: "+ scorePerCent +"%</p>";

	//This function is very important as it is what will trigger once you click the try again element on the page.
    tryAgain.onclick = function(){
		//This part sets the start division to invisible (even though it should already be that)
		start.style.display = "none";
		//Make sure that the quiz itself is still displaying. It should be, but just in case.
		quiz.style.display = "block";
		//This part makes the score division invisible
    scoreDiv.style.display = "none";
		//Render the counter for the next question
		renderCounter();
		//Reset the timer to count back to 10
		TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
		//Set the current question back to 0 (the first question)
		runningQuestion = 0;
		//Set the timer display count to 0 and the score to 0
		count = 0;
		score = 0;
		//Run the function to display a question. In this case, it will be the first question.
		renderQuestion();
		
		//This for loop will set all the dots on the quiz (which are id'd 1 2 and 3) to white.
		//This makes it appear as if we reset the right and wrong questions answered.
		for(i = 0; i < questions.length; i++){
			document.getElementById(i).style.backgroundColor = "#fff";
		}
		
		//Most importantly, at the end, hide the try again button! This might mess things up if we click it mid quiz.
		tryAgain.style.display = "none";
		//DEBUG TO TEST FUNCTIONALLITY
		//alert("Restart triggered");
		

    }
}
























