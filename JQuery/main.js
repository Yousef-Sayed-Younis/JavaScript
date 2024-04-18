/*
    $("HTML Element").JQueryFunction(function(){})

    $ => JQuery
    ("HTML Element")

    $("p").hide();

    // After Page Ready "Downloaded"
    $(document).ready(function () {

    });
    // Short Code Of Above
    $(function() {

    });
*/

$(document).ready(function () {
  /*
  $("button").click(function () {
    //  On Click
    $("p").css("color", "#0F0");
  });

  $("button").dblclick(function () {
    // On Double Click
    $("p").hide(speed, callback);
  });
*/
  /*
  $("button").mouseenter(function () {  // On Mouse Enter
    $(this).css("color", "#F00");
  });

  $("button").mouseleave(function () {  // On Mouse Leave
    $(this).css("color", "#00F");
  });
*/
  $("button").hover(
    function () {
      $(this).css("color", "#F00");
    },
    function () {
      $(this).css("color", "#00F");
    }
  );

  $(document.querySelectorAll("button")[0]).click(function () {
    $("p").show();  // Show Paragraph
  });
  $(document.querySelectorAll("button")[1]).click(function () {
    $("p").hide();  // Hide Paragraph
  });
  $(document.querySelectorAll("button")[2]).click(function () {
    $("p").toggle();    // Toggle Paragraph
  });
});
