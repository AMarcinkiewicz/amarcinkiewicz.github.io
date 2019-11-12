$(window).on('load', function() {
    "use strict";
    $("#preloader").delay(350).fadeOut('slow');
});

$('body').toggleClass(localStorage.toggled);

function darkLight() {
  if (localStorage.toggled != 'dark_mode') {
    $('body').toggleClass('dark_mode', true);
    localStorage.toggled = "dark_mode";

  } else {
    $('body').toggleClass('dark_mode', false);
    localStorage.toggled = "";
  }
}

if ($('body').hasClass('dark_mode')) {
   $( '#switchbox' ).prop( "checked", true )
} else {
  $( '#switchbox' ).prop( "checked", false )
}

$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});
