/*
Handles shared page interactions:
- theme button toggles dark and light mode
- mobile menu button opens and closes the nav links
*/
$(document).ready(function () {
  const themeToggle = $("#theme-toggle");
  const themeText = $("#theme-text");

  // Switch the body class so all pages change to dark mode styles.
  themeToggle.on("click", function () {
    $("body").toggleClass("dark-mode");

    // Update the helper text so user knows the next mode they can switch to.
    themeText.text($("body").hasClass("dark-mode") ? "Light mode" : "Dark mode");
  });

  const hamburger = $("#menu");

  // Show or hide the mobile navigation menu.
  hamburger.on("click", function () {
    $("#navMenu").toggleClass("show");
  });
});
