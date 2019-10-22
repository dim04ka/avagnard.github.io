window.jQuery = require('jquery');
var $ = require('jquery');
var jQuery = require('jquery');

$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
})


//btn consultation
$(function(){
	$('.consult-btn').click(function(){
		var $page = $('html, body');
		
				$page.animate({
						scrollTop: $('.footer').offset().top
				}, 400);
				return false;
	})
})


//burger mobile
$(function(){
	$('.header-burger').click(function(){
		$('.header-menu').toggleClass('header-menu-active');

		$('.header-menu-active a').click(function(){
			$('.header-menu').removeClass('header-menu-active');
		})
	})
})



  //paralax
  function paralax(e) {
	
    var layer2 = document.querySelector(".car");
    layer2.style.transform = "translateX("+e.clientX*10/100+"px)";
		layer2.style.transform = "translateY("+e.clientY*50/1000+"px)";
		
  }
	document.addEventListener('mousemove', paralax);
	

