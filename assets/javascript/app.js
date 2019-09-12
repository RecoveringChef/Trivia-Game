//test is hooked up properly
console.log("is it 7 x 6?");

var correct = 0;
var incorrect = 0;


        //var card = $("#quiz-area");    **starter text, but not used iwth way i went  
var countStartNumber = 20
var timer;
var qNumber = 0;

var questions = [
    {
        question: "Printed in large friendly letters on the front cover of the 'Hitchiker's Guide to the Galaxy' were the words _____",
        answers: [" No Worries " , " Don't Panic ", " You're Hosed ", " Enjoy the Journey "],
        correcAnswer: " Don't Panic ",
        image: "./assets/images/dontPanic.jpg"
    },
    
    {
        question: "Earth was destroyed to ____________.",
        answers: [" clean out the riff raff from the outer spiral arm ", " give the neighbors a better view ", " improve property values of surrounding systems ", " make way for a hyperspace bypass "],
        correcAnswer: " make way for a hyperspace bypass ",
        image: "./assets/images/explode.jpg"
    },

    {
        question: "Author Dent was the last human off of earth with only the  _________ he was wearing.",
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
        question: "Deep Thought, the most powerful computer ever made, took seven and a half million years to ponder ___________",
        answers: ["The nature of the Creator", "An exact value of Pi", "The Meaning of Life, the Universe, and Everything", "How much wood a woodchuck could chuck"],
        correcAnswer: "The Meaning of Life, the Universe, and Everything",
        image: "./assets/images/deepThought.jpg"
    },

    {
        question: "After the supercomputer Deep Thought spent 7.5 million years pondering what it was constructoed for it returned teh value of ______",
        answers: ["43", "42", "Pi", "Unspecified"],
        correcAnswer: "42",
        image: "./assets/images/42.jpg"
    },

    {
        question: "The latest edition of the entry for 'Earth' in the Hitchiker's Guide has doubled from previous versions. It is now ____ long",
        answers: ["1 FULL page", "2 words", "4 paragraphs", "8 sentences"],
        correcAnswer: "2 words",
        image: "./assets/images/mostlyHarmless.jpg"
    },

    {
        question: "The most  massively useful thing an interstellar hitch hiker can have is ______ ",
        answers: ["a broad spectrum antibiotic", "a good blaster", "your sense of humor", "a towel"],
        correcAnswer: "a towel",
        image: "./assets/images/towel.jpg"
    },

    {
        question: "Marvin the  _______ android accompanied Arthur on many of his travels",
        answers: ["paranoid", "unlucky", "chipper", "hyperactive"],
        correcAnswer: "paranoid",
        image: "./assets/images/marvin.jpeg"
    },

    {
        question: "Authur was eventually picked up by the recently stolen starship '________'",
        answers: ["White Star", "Red Dwarf", "Heart of Gold", "Serenity"],
        correcAnswer: "Heart of Gold",
        image: "./assets/images/ship.jpg"
    },

    {
        question: "Slartibartfast, a designer working on the Earth Mk. II was very proud of his award winning _______ ",
        answers: ["mountains", "cyclone storms", "dessert biomes", "fjords"],
        correcAnswer: "fjords",
        image: "./assets/images/fjord.jpg"
    },

//    {
 //       question: " plenty more to make",
 //       answers: ["1", "2", "3", "4y"],
 //       correcAnswer: "",
 //       image: "./assets/images/"
//    },

//    {
 //       question: " plenty more to make",
 //       answers: ["1", "2", "3", "4y"],
 //       correcAnswer: "",
 //       image: "./assets/images/"
//    },

//    {
 //       question: " plenty more to make",
 //       answers: ["1", "2", "3", "4y"],
 //       correcAnswer: "",
 //       image: "./assets/images/"
//    },


];



//$(document).on("click")  //that calls the loadQuestion function




var game = {
    // set the object values
     question: questions,

     //Countdown function
    
    countDown: function() {

        console.log("ready, set");
        clearInterval(timer);
        timer = setInterval(game.decrement, 1000);
        
         // decrement counter
        // display counter in on page
        // run timer function

    },
    
    decrement: function(){
        if (countStartNumber >0){
            console.log(countStartNumber);            
            countStartNumber --
        }
         else if (countStartNumber === 0){
             game.timeUp()
            }

            $("#timeLeft").html("Time remaining: " + countStartNumber)
        
       

        


    },
    
    // loadQuestion: function
    loadQuestion: function() {

        console.log("loading...");
        $("#start").hide();
        $("#questionsDisplay").html(questions[qNumber].question);
        $("#answersDisplay").html(questions[qNumber].answers);
        
      //  for (var i = 0; i < questions.answers.length; i++){
    //        holder.push(answers[i]);
     //   };
      

        // set timer variable
        // add question dynamically
        // for loop to go through questions
    },
        
    // nextQuestion: function
    nextQuestion: function() {
        console.log("next up");
        // set countdown
        // display counter
        // increment currentQuestion
        //run loadQuestion function
    },
        
    // timeUp: function
    timeUp: function() {
        console.log("never enough time");
        $("#answerDisplay").html("<p>Too slow. So sorry. Maybe next time. The correct answer is: ");
        incorrect ++;
      //  game.stop();
       
               
        game.countDown;
        game.nextQuestion;

        // clearInterval
        // display on page
        // conditional - if your in current question or next question
    },
    
 //   stop: function(){
 //       running = false;
 //       clearInterval(timer);
 //   },
        
    // results: function
    results: function () {
        // clear interval
        // display results
    },
    //clicked: function ()
    clicked: function () {
    },

    // answerInCorrectly: function
    answerInCorrectly: function () {
         incorrect ++;
         console.log("YOU ARE WRONG!")
        // display the right answer
        // condition to either go to results or go to next question
    },
        
    // answeredCorrect: function
    answerCorrect: function() {
        correct ++;
        console.log("Si Senor")
        // display that they are correct
    },
        
    // reset: function
    restart: function () {
        console.log("test 123");
        game.countDown();
        game.loadQuestion();
       
        
    }
   
};

$("#start").on("click", game.restart)

//$("#restart").on("click", game.restart) //needs to be hdden until afer w or l  **Or do we really need, UI might be cleaner with one button