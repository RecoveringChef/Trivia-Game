//test is hooked properly
console.log("is it 7 x 6?");



var card = $("#quiz-area");
var countStartNumber = 30
var timer;

var questions = [
    {
        question: "Printed in large friendly letters on teh front covers wre the words _____",
        answers: ["No Worries!", "Don't Panic!", "You're Hosed", "Enjoy the Journey"],
        correcAnswer: "Don't Panic!",
        image: "./assets/images/dontPanic.jpg"
    },

    {
        question: "Author Dent was the last human off of earth only the  ____ he was wearing.",
        answers: ["suit", "bath towel", "swim trunks", "bath robe"],
        correcAnswer: "bath robe",
        image: "./assets/images/arthur.jpg"
    },

    {
        question: "So long and thanks for all the _______",
        answers: ["Fish", "Memories", "Rubles", "Television Shows"],
        correcAnswer: "Fish",
        image: "./assets/images/soLong.jpg"
    },


    {
        question: "Deep Thought, the most powerful computer ever made, took XX thousand years to ponder ___________",
        answers: ["The nature of the Creator", "An exact value of Pi", "The Meaning of Life, the Universe, and Everything", "How much wood a woodchuck could chuck"],
        correcAnswer: "The Meaning of Life, the Universe, and Everything",
        image: "./assets/images/deepThought.jpg"
    },

    {
        question: "After so long thinking deeply it returned a value of ____",
        answers: ["43", "42", "Pi", "4"],
        correcAnswer: "",
        image: "./assets/images/42.jpg"
    },

    {
        question: "The latest edition of the entry for Earth in the Hitchiker's Guide has doubled from previous versions. It is now ____ long",
        answers: ["1 full page", "2 words", "4 paragraphs", "8 sentences"],
        correcAnswer: "2 words",
        image: "./assets/images/"
    },

    {
        question: "",
        answers: ["1", "2", "3", "4"],
        correcAnswer: "",
        image: "./assets/images/"
    },

    {
        question: "",
        answers: ["1", "2", "3", "4"],
        correcAnswer: "",
        image: "./assets/images/"
    },

    {
        question: "",
        answers: ["1", "2", "3", "4"],
        correcAnswer: "",
        image: "./assets/images/"
    },

    {
        question: "",
        answers: ["1", "2", "3", "4"],
        correcAnswer: "",
        image: "./assets/images/"
    },

];

//$(document).on("click", restart ) //that calls to restart game function. needs to be built
//$(document).on("click")  //that calls the clicked function
//$(document).on("click")  //that calls the loadQuestion function