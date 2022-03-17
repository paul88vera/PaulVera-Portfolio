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

const toggleWork = () => {
  let projects = document.querySelector('#Work');
  let works = document.querySelector('#Works');

  projects.classList.remove('hidden');
  works.classList.add('hidden');
  console.log('developer goes on');
};

const toggleProjects = () => {
  let projects = document.querySelector('#Work');
  let works = document.querySelector('#Works');

  works.classList.remove('hidden');
  projects.classList.add('hidden');
  console.log('graphics goes on');
}

window.addEventListener("scroll", scrollReveal);