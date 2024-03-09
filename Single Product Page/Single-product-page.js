let slideIndex = 1;
let slideId = "product-image";
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let x = document.getElementsByClassName(slideId);
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

document.addEventListener("DOMContentLoaded", function () {
  const expandableElements = document.querySelectorAll(".product-description-detail");
  
  expandableElements.forEach(function (element) {
    const toggleIcon = document.createElement("button");
    toggleIcon.className = "ti-angle-down";
    toggleIcon.setAttribute("style", "position: absolute;left: 50%;bottom: 0;z-index: 1");
    toggleIcon.addEventListener("click", function () {
      element.classList.toggle("expanded");
    });
    element.appendChild(toggleIcon);
  });
});


