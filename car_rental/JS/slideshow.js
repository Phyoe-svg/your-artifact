var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex >= x.length) {myIndex = 0}  // Reset myIndex if it exceeds or equals the length of images  
  x[myIndex].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
