// Import jQuery
window.$ = window.jQuery = require("jquery");

$(function() {
  $(".mobileIcon").on("click", function() {
    $(".navbar__mobile").addClass("navbarOpen");
    $(".mobileIconClose, .navbar__mobile__menu").fadeIn(500);
  });

  $(".mobileIconClose").on("click", function() {
    $(".navbar__mobile").removeClass("navbarOpen");
    $(".mobileIconClose, .navbar__mobile__menu").fadeOut(500);
  });
});

//Search Box
$(function() {
  $(".searchIcon").on("click", function() {
    $(".searchBox").addClass("searchOpen");
    $(".searchClose, .searchInput").fadeIn(500);
  });

  $(".searchClose").on("click", function() {
    $(".searchBox").removeClass("searchOpen");
    $(".searchClose, .searchInput").fadeOut(300);
  });
});

//Run Video Player
$(".video__box").click(function() {
  $("iframe", this)[0].src += "&amp;autoplay=1";
  $(this).addClass("openVideo");
});

var top = $(".video__box").offset().top;
var offset = Math.floor(top + $(".video__box").outerHeight() / 2);

//Detect Scroll
$(window).scroll(function() {
  var scrollTo = $(window).scrollTop();
  var docHeight = $(document).height();
  var windowHeight = $(window).height();
  var scrollPercent = (scrollTo / (docHeight - windowHeight) * 100).toFixed(1);
  var targetPercentage = 10;
  var navBarHeight = 80;
  var targetID = "#navigation";

  $("#indicator").css({ width: scrollPercent + "%" });

  //Run Reading Indicators
  if (scrollPercent > targetPercentage) {
    $(targetID).css({ bottom: "0" });
  } else {
    $(targetID).css({ bottom: "-" + navBarHeight + "px" });
  }

  if (screen && screen.width > 480) {
    //Run Sticky Video
    if (scrollTo > offset) {
      $(".video").addClass("aside");
      $("iframe").attr({
        width: "341",
        height: "200"
      });
      $(".video__box").css({
        width: "341px",
        height: "200px"
      });
    } else {
      $(".video").removeClass("aside");
      $("iframe").attr({
        width: "768",
        height: "450"
      });
      $(".video__box").css({
        width: "768px",
        height: "450px"
      });
    }
  }
});
