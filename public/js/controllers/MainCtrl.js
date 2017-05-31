angular.module('MainCtrl', []).controller('MainController', function($scope) {
		$('.myslider').slick({
		  infinite: true,
		  speed: 300,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  slidesToShow: 1,
		  adaptiveHeight: true,
		  mobileFirst: true,
		  prevArrow: '<button type="button" class="slick-prev" style = "margin-left: 30px; z-index: 10;">Previous</button>',
		  nextArrow: '<button type="button" class="slick-next" style = "margin-right: 30px;">Next</button>',
		});
});
