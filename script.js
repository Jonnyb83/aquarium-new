
function myFunction() {
  var x = document.getElementById("video-angelfish").autoplay;
  document.getElementById("demo").innerHTML = x;
}

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "aquarium-01.jpg";
images[1] = "aquarium-02.jpg";
images[2] = "aquarium-03.jpg";
images[3] = "aquarium-06.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

 












// var Slide = function(params){
//   this.element = params.element;
 
//   // since the options get passed through directly
//   // from the main instance you can use whatever
//   // options suit your transition
//   this.options = params.options;
// };
 
// Slide.prototype.hide = function(instant, direction){
//   this.element.style.display = 'none';
// };
 
// Slide.prototype.show = function(instant, direction){
//   this.elment.style.display = 'block';
// };
 
// var Slides = require('slides-js');
// new Slides(document.querySelector('.slides'), {
//   transition: Slide
// });