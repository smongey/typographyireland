var app = angular.module('typirl', []);

app.controller('AppCtrl', ['$scope', function($scope){
	$scope.events = [{
		category: 'Symposium',
		title: 'Green Sleeves: Design and Music Symposium',
		date: '5th May 2017',
		link: 'files/Green-Sleeves-provisional-programme.pdf'
	},{
		category: 'Publication of Papers',
		title: 'Face Forward International Typography Conference 2015',
		date: 'Expression of interest by 30th January 2017',
		link: 'publication-of-papers'
	},{
		category: 'Workshop',
		title: 'Type Together | Typeface Design Workshop',
		date: '18 – 20th November 2016',
		link: 'https://www.facebook.com/events/1584676551840251/'
	},{
		category: 'Conference',
		title: 'Face Forward Dublin 2015 — Programme Schedule Now Available',
		date: '11 – 12th December 2015',
		link: 'http://faceforward.typography.ie'
	},{
		category: 'Call for Papers (Extended Deadline)',
		title: 'Face Forward International Typography Conference',
		date: 'Deadline for abstracts now 11th May 2015',
		link: 'call-for-papers'
	},{
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
		category: 'Lecture',
		title: 'Type You Can Read',
		date: '20th February 2015',
		link: 'https://www.facebook.com/TypographyIreland/posts/933757076664360'
	},{
		category: 'Lecture',
		title: 'Stuck in the Past',
		date: '23rd February 2015',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/921179134588821/'
	},{
		category: 'Workshop',
		title: 'TypeTogether Typeface Design',
		date: '20th–22nd February 2015',
		link: 'https://www.facebook.com/TypographyIreland/posts/920801937959874'
	}, {
		category: 'Lecture',
		title: 'From sound to glyph: the typographic representation of languages',
		date: '20th October 2014',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/864807033559365/'
	}, {
		category: 'Workshop',
		title: 'An introduction to multi-script typography',
		date: '24th–26th October 2014',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/863266807046721/'
	}, {
		category: 'Lecture',
		title: 'Contemporary typography and typeface design',
		date: '23rd October 2014',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/860142120692523/'
	}, {
		category: 'Lecture',
		title: 'Ocean Bound: Stories about Printing at Sea',
		date: '7th March 2014',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/730425273664209/'
	}, {
		category: 'Lecture',
		title: 'Groping for the Light Switch: A Novelist&rsquo;s Guide to Type Design',
		date: '7th March 2014',
		link: 'https://www.facebook.com/TypographyIreland/photos/a.143934495646626.17757.138462212860521/714383651935038/'
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



