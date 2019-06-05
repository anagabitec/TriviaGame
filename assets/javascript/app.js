//$(document).ready(function () {

    // // GLOBAL VARIABLES  
    // var correctAnswers = 0;
    // var wrongAnswers = 0;
    // var currentQuestion = 0;

    // var intervalId;
    // var timer = 60;
    
    //var score = 0; 
   
    // CRREATING ARRAYS FOR QUESTIIONS
    var myQuestions = [
        {
            question: "The city of New York is made up of_____ boroughs.",
            answers: {
                a: 'five',
                b: 'seven',
                c: 'four',
                d: 'three',
            },
            correctAnswer: 'a',
            hint: src = "../images/boroughsmage.jpg",
        },
        {
            question: "WWhat New York City (NYC) Art Deco building has six levels of stainless steel arches topped by a lit lancet spire on its top?",
            answers: {
                a: "Seagram Building",
                b: "Chrysler Building",
                c: "Empire State Building",
                d: "Woolworth Building",
            },
            correctAnswer: 'b',
            hint: "../images/cryslerbuilding.jpg",
        },
        {
            question: "What NYC museum started in Gracie Mansion and later moved to 5th Ave. between 103rd St. and 104th St.?",
            answers: {
                a: "Cooper-Hewitt",
                b: "Whitney Museum of American Art",
                c: "Museum of American Folk Art",
                d: "Museum of The City of New York",
            },
            correctAnswer: 'd',
            hint: "../images/museumofthecityofny.jpg",
        },
        {
            question: "The largest art museum in the Western Hemisphere is located in NYC, what is its name?",
            answers: {
                a: "Museum of Modern Art",
                b: "Whitney Museum",
                c: "Solomon R. Guggenheim Museum",
                d: "Metropolitan Museum of Art",
            },
            correctAnswer: 'd',
            hint: "../images/museumofthecityofny.jpg",
        },
        {
            question: "One of the most unusual gardens in NYC, until June 29th 2002, had sculptures by Matisse, Miro, and Rodin. This garden was at the ________?",
            answers: {
                a: "Museum of Modern Art",
                b: "Central Park",
                c: "Metropolitan Museum of Art",
                d: "The Frick Collection",
            },
            correctAnswer: 'a',
            hint: "../images/moma.jpg",
        },
    ];

    
    $('#next').hide();
    $('#submit').hide();
    var counter = 0;

    // Quiz
    function buildQuiz() {
        // blank array to push user answers into, and a correct answers array
        var output = [];
        // for each question, store the list of answer choices
        myQuestions.forEach((currentQuestion, questionNumber) => {
            var answers = [];
            // for each available answer to this question
            for (letter in currentQuestion.answers) {
                // add an html radio button
                answers.push(`<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
                );
            }
            output.push(`<div class="slide">
                        <div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join("")} </div>
                        </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
        console.log("TCL: buildQuiz -> output", output)
    }

    function showResults() {
        // gather answer containers from our quiz
        var allAnswers = quizContainer.querySelectorAll('.answers');
        console.log("TCL: showResults -> allAnswers", allAnswers)
        // keep track of user's answers
        var numCorrect = 0;
        var unanswered = 0;
        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            var answerContainer = allAnswers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var isChecked = answerContainer.querySelector(selector);
            var userAnswer = isChecked ? isChecked.value : '';

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
                // color the answers green
                // allAnswers[questionNumber].style.color = 'lightgreen';
            }
            else if (userAnswer === '') {
                unanswered++;
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                allAnswers[questionNumber].style.color = 'red';
            }
        });
        // show number of correct answers out of total
        resultsContainer.innerHTML = 'Wow...You "walked the line" and got ' + numCorrect + ' out of ' + myQuestions.length + ' answers correct';
        $('#counter').html('in ' + counter + " seconds!");
    }

    function showSlide(n) {
        $(slides[currentSlide]).removeClass('active-slide');
        $(slides[n]).addClass('active-slide');
        currentSlide = n;
       
        
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");

    buildQuiz();

    
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    nextButton.addEventListener("click", showNextSlide);
    
    submitButton.addEventListener("click", showResults);

    var interval;
    var intervalTime;


    function startTimer() {
        clearInterval(interval);
        interval = setInterval(gameOver, 60000);
        clearInterval(intervalTime);
        intervalTime = setInterval(increment, 1000);
    }
    function increment() {
        console.log(counter);
        counter++;
    }

    function gameOver() {
        clearInterval(interval);
        clearInterval(intervalTime);
        
        $("#submit").hide();
        $(".slide").hide();
        $('.active-slide').removeClass('.active-slide');
        showResults(myQuestions, quizContainer, resultsContainer)
    }

    $(".startBtn").click(function () {
        $("p").hide();
        $(".startBtn").hide();
        showSlide(0);
        startTimer();
    });



    // when user clicks submit, show results, show Sun Records gif, play Great Balls of Fire
    
