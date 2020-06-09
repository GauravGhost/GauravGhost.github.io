// init nav object from dom
var cont-icon = $('#continue');
// get heigth of the nav
var navHeight = $('#continue').outerHeight();

// click-trigger
$('#continue').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});

// scroll-trigger
$(document).scroll(function() {
  activateCurrentSection();
});

// get target position and scrolls to it
function scrollToSection(self) {
  // get the target href
  var href = $(self).attr('href');

  // get the target position
  // replace 56 with your navbar's height
  var targetPos = $(href).offset().top - navHeight - 56; 
 

  // scroll to target
  $('html, body').animate({
    scrollTop: targetPos
  }, 600);
}