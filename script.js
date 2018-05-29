
// survey form submitted alert


function formsubmitted() {
  alert("Thank you for your feedback!");
}

//display input box

var inputBox = document.getElementById('free form');

inputBox.onkeyup = function() {
  document.getElementById('printchatbox').innerHTML = inputBox.value;
}




// progress bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
