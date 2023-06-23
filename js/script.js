// Get all list__block--container elements
const listContainers = document.querySelectorAll(".list__block--container");

// Add event listener to each container
listContainers.forEach((container) => {
  // Get the elements with the class 'static-bg' within the container
  const staticElements = container.querySelectorAll(".static-bg");

  // Add event listener for hover
  container.addEventListener("mouseover", () => {
    // Apply opacity transition to each static element
    staticElements.forEach((element) => {
      element.style.opacity = "1";
      element.classList.add("mouseOverEffect");
    });
  });

  container.addEventListener("touchstart", () => {
    // Apply opacity transition to each static element
    staticElements.forEach((element) => {
      element.style.opacity = "1";
      element.classList.add("mouseOverEffect");
    });
  });

  // Add event listener for mouseout
  container.addEventListener("mouseout", () => {
    // Remove opacity transition from each static element
    staticElements.forEach((element) => {
      element.style.opacity = "0";
      element.classList.add("mouseOverEffect");
    });
  });

  container.addEventListener("touchcancel", () => {
    // Remove opacity transition from each static element
    staticElements.forEach((element) => {
      element.style.opacity = "0";
      element.classList.add("mouseOverEffect");
    });
  });
});

//hamburger

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.navbar__items');
const navLink = document.querySelectorAll('.navbar__items li');

const preventScroll = function() {
    window.scrollTo(0, 0);
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");

    window.addEventListener('scroll', preventScroll);

    if (!hamburger.classList.contains("active")) {
        window.removeEventListener('scroll', preventScroll);
    }
})

navLink.forEach(n => n.addEventListener('click', function(){
    hamburger.classList.remove("active");
    navItems.classList.remove("active");

    window.removeEventListener('scroll', preventScroll);
}))

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});