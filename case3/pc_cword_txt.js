"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: 
   Date:   
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
//step 4 sets each variable to be called 
var allLetters;
var currentLetter;
var wordLetters;
var acrossLetter;
var acrossClue;
var downClue;
var typeDirection = "right";

//step 5 allows for the code to show on the screen
window.onload = init();
 
//step 6 allows for the clues to pop up from either going across or down 
function init() {
allLetters = document.querySelectorAll("table#crossword span");
currentLetter = allLetters[0];
var acrossID = currentLetter.dataset.clueA;
var downID = currentLetter.dataset.clueD;
acrossClue = document.getElementById(currentLetter.dataset.clueA);
downClue = document.getElementById(currentLetter.dataset.clueD);
}

//step7 sets the color for when you either go across or down on the game
function formatPuzzle(puzzleLetter) {
   currentLetter = puzzleLetter;
   
   for(var i = 0; i < allLetters.length; i++){
      allLetters[i].style.backgroundColor = "";
   }
   acrossClue.style.color = "";
   downClue.style.color = "";
   
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   acrossClue.style.color = blue;
   wordLetters.style.backgroundColor = "rgb(231, 231, 255)";
   
   downClue = document.getElementById(currentLetter.dataset.clueA);
   downClue.style.color = red;
   wordLetters.style.backgroundColor = "rgb(255, 231, 231)";
   
   if(typeDirection *** "right"){
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }else if{
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
      )
   
   
   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
