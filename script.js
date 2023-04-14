

let year = new Date().getFullYear();

let copyrightText = document.querySelector('footer p');
copyrightText.innerHTML = "&copy; " + year + " SpotDreamerZ. All rights reserved.";



 var header = document.getElementById("header");
window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (window.scrollY > 1) {
    header.style.backgroundColor = '#fff';
    header.style.color = '#fff';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.color = '#fff';
  }
});




