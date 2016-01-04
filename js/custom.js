$(document).ready(function () {
  $(".list-group").height($(".mainContent").height() + 24);
});

function toggleNav() {
	$('.row-offcanvas').toggleClass('active')
	$('.mobileMenu').toggleClass('activeMenu')
}

$( window ).resize(function() {
  
  $(".list-group").height($(".mainContent").height() + 24);
     
});
