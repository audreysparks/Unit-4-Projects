"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Audrey Sparks
   Date:   3-11-2020
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/ 
  
window.onload = init();

function init() {// Initializes the contents of the web page and sets up the event handlers.
   //selects every star image and stores as shorthand array
   var stars = document.querySelectorAll("span#stars img");

   for (var i = 0; i < stars.length; i++) {
      stars[i].style.cursor = "pointer"; //add pointer

      stars[i].addEventListener("mouseenter", lightStars); //stars to show up
   }
   document.querySelector("textarea").addEventListener("keyup", updateCont);
}

function lightStars(event) { // Function that colors the stars representing the user rating for the book.
   var stars = document.querySelectorAll("span#stars img") //have the yellow stars pop up 
   var target = event.target;
   target.addEventListener("mouseleave", function (event) {
      console.log("leaving", event.target.getAttribute("alt"));
      var leavingStarNumber = event.target.getAttribute("alt")
      for (var i = leavingStarNumber; i < stars.length; i++) {
         stars[i].src = "bw_star.png";
         console.log(stars)
      }
   })
   var starNumber = event.target.getAttribute("alt");
   console.log("test", starNumber);

   for (var i = 0; i < starNumber; i++) { //have star pop up when hovered
      stars[i].src = "bw_star2.png";
      document.querySelector("input#rating").value = starNumber + " stars";
   }
   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "bw_star.png";

      console.log("Exit", i); //when mouse is moved star stays in place
   }
}

function updateCont() {  // Updates the count of characters in the wordCountBox element.
   var comentText = "textarea";
   var charCount = countCharacters(commentText);

}

/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   
  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   