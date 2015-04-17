var app = angular.module('typirl', []);

app.controller('AppCtrl', ['$scope', function($scope){
	$scope.events = [{
		title: 'Call for Papers',
		date: '1th May'
	}, {
		title: 'Paul Barnes',
		date: '6th May'
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
    }, 300);
})