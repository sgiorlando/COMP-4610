$(function() {
    var color = $('li').css("background-color");
    $('ul').after('<p> Color was: ' + color + '</p>');
    $('li').each(function() {
      $(this).css({
        "background-color": "#c5a996",
        "border": "1px solid white",
        "color": "black",
        "text-shadow": "none",
        "font-family": "Georgia, Times, 'Times New Roman'"
      });
    });
});
