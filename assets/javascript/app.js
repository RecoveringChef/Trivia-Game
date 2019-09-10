var card = $("#quiz-area");
var countStartNumber = 30
var timer;

var questions = [
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
    
    {
        question: "",
        answers: ["1", "2", "3", "4"] ,
        correcAnswer: "",
        image:
    },
   


]

var game = {
    question: questions,
    counter: countStartNumber,
    currentQuestions: 0,
    correct: 0,
    incorrect: 0,

    countdown: function (){
        //decrement counter
        //display counter in on page
        //run timeUp func

    },
    loadQuestion: function (){

    },
    
    nextQuestion: function (){

    },
    
    timeUp: function (){

    },
    
    results: function (){

    },
    
    clicked: function (){

    },
    answerInCoorectly: function (){

    },
    
    answerCorrectly: function (){

    },
    
    reset: function (){

    },
}

$(document).on("click", restart ) //that calls to restart game function. needs to be built
$(document).on("click")  //that calls the clicked function
$(document).on("click")  //that calls the loadQuestion function