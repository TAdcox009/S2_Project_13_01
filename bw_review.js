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

      // a. Declare the stars variable that stores an object collection of the reviewing stars, referenced by the span#stars img selector.
      var stars = document.querySelectorAll("span#stars");

      // b. Loop through the star collection and for each star image in the collection change the cursor style to pointer and add an event listener to run the lightStars() function in response to the mouseenter event occurring over each star image.
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            document.addEventListener("mouseenter", lightStars);
      }

      // c. After the for loop, add an event listener to the comment text area box that runs the update- Count() function in response to the keyup event.
      document.addEventListener("keyup", updateCount);
}

// 6. Create the lightstars() function.The purpose of this function is to color a star when the user moves the mouse pointer over a star image in order to reflect the user’s rating of the book. Add the following commands to the function:
function lightStars(e) {

      // a. Daniel has stored the rating value of each star image in the img element’ s alt attribute. Store the value of the alt attribute of the target of the event object in the starNumber variable.
      var starNumber = e.target.alt;


      // b. Declare the stars variable containing the object collection referenced by the selector
      // span# stars img.
      var stars = document.querySelectorAll("span#stars");

      // c. Loop through the stars collection with an index ranging from 0 up to less than the value of the starNumber variable. Light every star in the collection by changing the src attribute of the star image to the bw_star2.png image file.
      for (var i = 0; i < starNumber; i++) {
            starNumber[i].src = "bw_star2.png";
      }

      // d. After the for loop, create another loop that loops through the stars collection with the index ranging from the value of the starNumber variable to less than 5. Unlight every star in this col - lection by changing the src attribute of the star image to the bw_star.png image file.
      for (var i = 0; i < 5; i++) {
            starNumber[i].src = "bw_star.png";
      }

      // e. Change the value of the input box with the id attribute“ rating” to starNumber stars, where starNumber is the value of the starNumber variable.
      document.getElementById("rating").value = starNumber + "stars";

      // f. When the mouse pointer moves off a star image, the lit stars should be unlit.Add an event listener to the target of the event object that runs the turnOffStars() function in response to the mouseleave event.
      e.target.addEventListener = turnOffStars();

      // g. If the user clicks the star image, the selected rating should be set, which means moving the mouse pointer off the star should not remove the rating. Add an event listener for the target of the event object that runs an anonymous function removing the turnOffStars() function from the mouseleave event.
      document.addEventListener

}


function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}