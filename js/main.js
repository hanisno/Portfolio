$("#menu-toggle").click(function () {
  $("header").toggleClass("open");
});

/*Credit to lovromar on jsfiddle for the parallax effect code*/
$(document).ready(function () {
  var currentX = "";
  var currentY = "";
  var movementConstant = 0.002;
  $("main").mousemove(function (e) {
    if (currentX == "") currentX = e.clientX;
    var xdiff = e.clientX - currentX;
    currentX = e.clientX;
    if (currentY == "") currentY = e.clientY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $(".parallaxfx img").each(function (i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
      var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
      var newY = $(el).position().top + movementy;
      $(el).css("left", newX + "px");
      $(el).css("top", newY + "px");
    });
  });

  /*$(document).ready(function () {
    var currentX = "";
    var currentY = "";
    var movementConstant = 0.002;
    $("main").mousemove(function (e) {
      if (currentX == "") currentX = e.clientX;
      var xdiff = e.clientX - currentX;
      currentX = e.clientX;
      if (currentY == "") currentY = e.clientY;
      var ydiff = e.pageY - currentY;
      currentY = e.pageY;
      $(".parallaxfx img").each(function (i, el) {
        setTimeout(function () {
          var movement = (i + 1) * (xdiff * movementConstant);
          var movementy = (i + 1) * (ydiff * movementConstant);
          var newX = $(el).position().left + movement;
          var newY = $(el).position().top + movementy;
          $(el).css("left", newX + "px");
          $(el).css("top", newY + "px");
        }, 1000);
        clearTimeout();
      });
    });*/
  /*Work detail image slides*/

  $(".next").on("click", function () {
    var activeImg = $(".active");
    var nextImg = activeImg.next();
    console.log("1st");

    if (nextImg.length) {
      activeImg.removeClass("active");
      nextImg.addClass("active");
      console.log("next");
    }
  });

  $(".prev").on("click", function () {
    var activeImg = $(".active");
    var prevImg = activeImg.prev();
    console.log("2nd");

    if (prevImg.length) {
      activeImg.removeClass("active");
      prevImg.addClass("active");
      console.log("prev");
    }
  });
});
