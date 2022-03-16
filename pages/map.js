'use strict'


  $(function(){
    $('#world-map-markers').vectorMap({
      map: 'world_merc',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 40.0,
      hoverColor: true,
      markersSelectable: true,
      markerStyle: {
        initial: {
          fill: 'blue',
          stroke: 'yellow'
        },
      },
      backgroundColor: '#black',
      markers: [
        {latLng: [-8.409518, 115.188919], name: 'Bali', id:'Bali-1'},
        {latLng: [37.983810, 23.727539], name: 'Greece', id: 'Greece-1'},
        {latLng: [7.87409, 80.76709], name: 'Sri Lanka', id: 'Sri-Lanka-1'},
        {latLng: [9.748917, -83.753428], name: 'Costa Rica', id: 'Costa-Rica-1'},
        {latLng: [43.771, 11.2486], name: 'Tuscany', id: 'Tuscany'},
      ],
    });
  });


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
  
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


