(function ($) {$(document).ready(function () {

  	//end blueasyTabs
    
    function hiddedMenu() {
      var $trigger = $('.trigger-nav'),
          $closebtn = $('.closebtn'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).fadeIn();
      });

      $closebtn.click(function() {
        $($menu).fadeOut();
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    hiddedMenu();


// ************************************************* //
// zomm ******************************************* //

  // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var pic = document.getElementById('carousel-pic');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = pic.src;
    captionText.innerHTML = pic.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

  }); //end ready

}(jQuery));