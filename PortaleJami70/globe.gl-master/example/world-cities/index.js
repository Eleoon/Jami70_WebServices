function ClickCity() {
  console.log("sono nella funzione")
   window.location.assign("http://127.0.0.1:3000/PortaleJami70/html/map.html");
     
   };

/*------JQUERY----*/

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
})


/*----fine jquery------ */