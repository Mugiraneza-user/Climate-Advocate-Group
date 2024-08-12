

// Get references to the hamburger menu and navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Add click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the active class on the navigation menu
    navMenu.classList.toggle('active');
});




/*$(document) .ready(function(){
 
    $('.fa-bars') (function(){
        $ (this) .toggleclass('fa-times');
        $ ('.navbal') .toggleclass('nav-toggle');
    });
   $(window).on ('lod scroll ', function(){
    $ ('.fa-bars') .removeclass('fa-times');
    $ ('.navbal') .removeclass('nav-toggle');

    if($(window) .scrolltop() >30){
        $('home-display') .addclass('home-display-active');

    } else{
        $('home-display') .removeclass('home-display-active');
    }
});

   }); */



