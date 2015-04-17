var app = angular.module('typirl', []);

app.controller('AppCtrl', ['$scope', function($scope){
	$scope.events = [{
		category: 'Call for Papers',
		title: 'Face Forward International Typography Conference',
		date: '1st May 2015',
		link: 'call-for-papers'
	}, {
		category: 'Lecture',
		title: 'Designing typefaces across the Atlantic — Paul Barnes (Commercial Type)',
		date: '6th May 2015',
		link: 'paul-barnes'
	},{
		category: 'Lecture',
		title: 'Annie Atkins & James Kelleher',
		date: '27th March 2015',
		link: 'annie-james'
	},{
		category: 'Exhibition',
		title: 'Exquisite Editions',
		date: '4th March 2015',
		link: 'http://facebook.com/'
	},{
		category: 'Lecture',
		title: 'Veronika Burian & José Scaglione (TypeTogether) ',
		date: '20th February 2015',
		link: 'typetogether-lecture'
	},{
		category: 'Workshop',
		title: 'Type Design with TypeTogether ',
		date: '20th–22nd February 2015',
		link: 'typetogether-workshop'
	}];
}]);


Pace.on('done', function(){
	console.log('fired');
	$('#wrap').removeClass('hidden');
	setTimeout(function(){
		$('.event').removeClass('dim');
	},200);
});


$('.event').on('click', function(){
	$(this).toggleClass('open');
});


$('.intro').on('click', function(){
	$('html, body').animate({
    	scrollTop: $("#here").offset().top
    }, 600, "easeOutExpo");
});


$(window).on('scroll', function(e){
	var scrollPoint = e.currentTarget.pageYOffset;
	var introHeight = $('.intro').outerHeight();
	var newHeight = introHeight - 90;
	if (scrollPoint > newHeight) {
		$('.menubutton').addClass('active');
	} else {
		$('.menubutton').removeClass('active');
	}
});




