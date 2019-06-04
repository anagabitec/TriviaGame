$(document).ready(function () {

    // // GLOBAL VARIABLES  
    // var correctAnswers = 0;
    // var wrongAnswers = 0;
    // var currentQuestion = 0;

    // var intervalId;
    // var timer = 60;
    
    var score = 0; 
   



    // CRREATING ARRAYS FOR QUESTIIONS
    var questions = [
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

    
    



    

    // // START BUTTON 
    // $("#startButton").on("click", function (event) {
    //     $("#quiz").empty();
    //     $("#startButton").addClass("d-none")
    //     generateQuestions(questions)
    // })
    
});
