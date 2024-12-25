// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("nav a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var offsetTop = targetElement.offsetTop;

        anime({
          targets: document.documentElement,
          scrollTop: offsetTop,
          duration: 1000,
          easing: "easeInOutQuad"
        });
      }
    });
  }
});
