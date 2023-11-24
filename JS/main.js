let scrollingUp = document.querySelector(".scrolling-up");
window.onscroll = function () {
    if (window.scrollY >= 400) scrollingUp.classList.add("show");
    else scrollingUp.classList.remove("show");
};
scrollingUp.onclick = function () {
    window.scrollTo(0, 0);
};
// Get elements
const navlist = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".navbar-nav li a");

// Handle nav list element on click
navlist.addEventListener("click", (e) => {
  // Remove active class from every element
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to current element
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
  }
});

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
      var src = image_2.getAttribute('src');
      document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
      var src = image_3.getAttribute('src');
      document.querySelector('.big-image-3').src = src;
  });
});x``

