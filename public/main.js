"use strict";
// Προσθήκη κλάσης "scroll" στο body όταν γίνεται scroll προς τα κάτω
window.addEventListener("scroll", function() {
    var body = document.body;
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      body.classList.add("scroll");
    } else {
      body.classList.remove("scroll");
    }
  });

document.getElementById('loader').style.display = 'block';

setTimeout(function() {
  document.getElementById('content').style.display = 'block';
  document.getElementById('loader').style.display = 'none';
}, 2000); // Προσαρμόστε το χρονικό διάστημα ανάλογα με τις ανάγκες σας
