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

// 5. Create the init() function. The purpose of the function is to define the event listeners used in the page. Add the following commands to the function:
function init() {
      var spa
}

// a. Declare the stars variable that stores an object collection of the reviewing stars, referenced by the span#stars img selector.
// b. Loop through the star collection and for each star image in the collection change the cursor style to pointer and add an event listener to run the lightStars() function in response to the mouseenter event occurring over each star image.
// c. After the for loop, add an event listener to the comment text area box that runs the update- Count() function in response to the keyup event.





function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}