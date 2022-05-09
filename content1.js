// Javascript for the homepage
// Farnood Tajbakhsh


// Popup JS explained:
// I assign three variables at the start and use document get element by id to to match them with my ids in HTML 
// to make the rest of the coding easier and more efficient. The onclick JavaScript event occurs when the user clicks on an element. 
// It runs a specified line of code when you click a HTML object that has the onclick attribute. Thus when the user clicks on the image, 
// the following functions runs. The JavaScript style display property is meant for setting and returning the display type of a specified element. 
// Most HTML elements have the block display types. So I set the style display of the variable popup to equal "block". To show an element, 
// I set the style display property to “block”. The src property sets or returns the value of the src attribute of an image. The "this" keyword r
// efers to the object the function belongs to. Specifying the src of the image to the js file make the function work properly and allow the entire 
// function to get the image and insert it inside the popup. I made the variable span for the close button. Just like img.onclick function to open 
// the popup when the image is clicked on I now make a span.onclick function to close the popup when the X button is clicked on. I use the popup 
// variable here again with the .style.display to equal "none" this time. To show the popup, I set the style display property to “block” in the 
// previous function. Now, to hide the popup, I set the style display property to “none”. And with that, the popup image is fully functional. 
// The same code is used for the second popup image as well. 


// Code use to get the popup
var popup = document.getElementById("mypopupG1");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("myGimg1");
var popupImg = document.getElementById("Gimg1");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}



// Code use to get the popup
var popup = document.getElementById("mypopupG2");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("myGimg2");
var popupImg = document.getElementById("Gimg2");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}



// Code use to get the popup
var popup = document.getElementById("mypopupG3");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("myGimg3");
var popupImg = document.getElementById("Gimg3");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}


// Code use to get the popup
var popup = document.getElementById("mypopupG4");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("myGimg4");
var popupImg = document.getElementById("Gimg4");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}


// Code use to get the popup
var popup = document.getElementById("mypopupG5");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("myGimg5");
var popupImg = document.getElementById("Gimg5");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}



// Code use to get the popup
var popup = document.getElementById("mypopupG6");

// Code used to get image and insert it inside the popup 
var img = document.getElementById("myGimg6");
var popupImg = document.getElementById("Gimg6");
img.onclick = function(){
  // display: block means that the element is displayed as a block, as paragraphs and headers have always been. 
  popup.style.display = "block";
  // In a function, "this" refers to the global object.
  // source attribute specifies image source
  popupImg.src = this.src;
}


var span = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}




