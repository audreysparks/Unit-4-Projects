"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: 
   Date:   
   
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
document.getElementById('loaded').innerHTML = init()

function init(){
   var stars = imgSelector("span#stars") ;
   for(var i = 0; i < mouseenter; i++){
      document.getElementById('mouseenter').innerHTML = lightStars();
   }
}

function lightStars(){

   var stars = ;
   for(){

   }
   
}
function turnOffStars(){

}

function updateCount(){
   var commentText;
   function countCharacters(commentText){
      var charCount;
      
   }

}
  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   