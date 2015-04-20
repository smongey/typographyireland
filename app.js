var app = angular.module('typirl', []);

app.controller('AppCtrl', ['$scope', function($scope){
	$scope.events = [{
		category: 'Call for Papers',
		title: 'Face Forward International Typography Conference',
		date: '1st May 2015',
		link: '/call-for-papers'
	}, {
		category: 'Lecture',
		title: 'Designing typefaces across the Atlantic — Paul Barnes (Commercial Type)',
		date: '6th May 2015',
		link: 'https://www.facebook.com/events/1571733183092880/'
	},{
		category: 'Lecture',
		title: 'Annie Atkins & James Kelleher',
		date: '27th March 2015',
		link: 'https://www.facebook.com/TypographyIreland/posts/951178238255577'
	},{
		category: 'Exhibition',
		title: 'Exquisite Editions',
		date: '4th March 2015',
		link: 'https://www.facebook.com/events/857523434305218/'
	},{
		category: 'Lecture',
		title: 'Veronika Burian & José Scaglione (TypeTogether) ',
		date: '20th February 2015',
		link: 'https://www.facebook.com/TypographyIreland/posts/933757076664360'
	},{
		category: 'Lecture',
		title: 'Fernanda Groetaers / David Meaney',
		date: '23rd February 2015',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/921179134588821/'
	},{
		category: 'Workshop',
		title: 'Type Design with TypeTogether ',
		date: '20th–22nd February 2015',
		link: 'https://www.facebook.com/TypographyIreland/posts/920801937959874'
	}];
}]);


Pace.on('done', function(){
	console.log('fired');
	$('#wrap').removeClass('hidden');
	setTimeout(function(){
		$('.event').removeClass('dim');
	},200);
});

$('.intro').on('click', function(){
	$('html, body').animate({
    	scrollTop: $("#here").offset().top
    }, 600, "easeOutExpo");
});


$(window).on('scroll', function(e){
	
	var scrollPoint = e.currentTarget.pageYOffset, 
		introHeight = $('.intro').outerHeight(),
		newHeight = introHeight - 90;

	if (scrollPoint > newHeight) {
		$('.menubutton, .menu').addClass('active');
	} else {
		$('.menubutton, .menu').removeClass('active');
	}

});

$(document).ready(function(){
	$('span.title').balanceText();


	$('.menubutton').on('click', function(e){
		e.preventDefault();
		$('.menu').toggleClass('open');
		console.log('hovered');
	});

});



