

var scrollReveal = function() {
 var reveal = document.querySelectorAll('.scroll');

 for (var i = 0; i < reveal.length; i++) {
  var winHeight = window.innerHeight;
  var revealTop = reveal[i].getBoundingClientRect().top;
  var revealStart = 70;

  if (revealTop < winHeight - revealStart) {
   reveal[i].classList.add('active');
  }
  else {
   reveal[i].classList.remove('active');
  }
 }

 var resReveal = document.querySelectorAll('.resScroll');

 for (var i = 0; i < resReveal.length; i++) {
  var winHeight = window.innerHeight;
  var revealTop = resReveal[i].getBoundingClientRect().top;
  var revealStart = 20;

  if (revealTop < winHeight - revealStart) {
   resReveal[i].classList.add('active');
  }
  else {
   resReveal[i].classList.remove('active');
  }
 }
};

window.addEventListener("scroll", scrollReveal);