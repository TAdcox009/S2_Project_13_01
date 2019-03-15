"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Todd Adcox Jr
   Date:   3-12-19
   
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





/*=================================================================*/
// Runs the init() function when the page is loaded by the browser.
window.onload = init;

// Init() function, defines the event listeners used in the page.
// Stars variable that stores the review stars.
// For every star image its going to change the cursor style to a pointer and adds an event listener to run the lightStars() function in response to the mouseenter event when hovering over a star.
// An event listener that runs the updateCount() function in response to the keyup event.
function init() {
      
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }

      document.getElementById("comment").addEventListener("keyup", updateCount);
}

// Function will color a star when the user moves the mouse pointer over a star image for the user’s rating.
// The alt attribute of the target of the event objectn is being stored in the starNumber variable.
//Stars variable containing the object collection referenced by the selector span# stars img.
// Lights every star in the collection by changing the source to the bw_star2.png image.
//Unlights every star in the collection by changing the source to the bw_star.png image.
// Changes the value of the input box with the id of rating to the variable starNumber.
// When the mouse moves off a star image, the lit stars will be unlit.
// If the user clicks the star image, the selected rating should be set, so if the user moves the mouse from the star the star should still be lit.
function lightStars(e) {
      
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");

     for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }

      document.getElementById("rating").value = starNumber + "stars";
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click",
       function(){
            e.target.removeEventListener("mouseleave", turnOffStars);
      }
      );     
}

// This function is to unlight the stars when the user moves the mouse pointer off the stars.
//Stars variable containing the object collection referenced by the selector span# stars img.
//Unlights every star in the collection by changing the source to the bw_star.png image.
// Changes the value of the rating input box to an empty text string. 
function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i= 0; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}

// The updatecount() function keeps a total of the number of characters that the user has typed into the comment text area box.
// The commentText variable references the value stored in the comment text area box.
// The charount variable is set to the countCharacters function with commentText as the paramters.
//  The wordcountbox references the wordCount input box.
// The wordCount input box is set to the charCount variable plus /1000. 
// If charCount is greater than 1000, then the style of the wordCount input box will be a white font on a red background, but if its less then 1000 then the the wordCount input box will be black font on a white background.
function updateCount(){
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";
      }
}

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}