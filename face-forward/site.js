function l(gill) { console.log(gill); }


var ff = {
	$w : $(window),
	$d : $(document),
	$b : $('body'),
	$about : $('section.about'),
	$fri : $('section.fri'),
	$sat : $('section.sat')
}


ff.$d.on('click', 'section.about', function(e) {

	l('about');
	ff.$b.removeClass('fri sat');
	ff.$b.addClass('about');
	ff.$b.removeClass('lock');

	ff.$about.removeClass('active');
	ff.$fri.removeClass('active');
	ff.$sat.removeClass('active');

}).on('click', 'section.fri', function(e) {

	l('fri');
	ff.$b.removeClass('about sat');
	ff.$b.addClass('fri lock');

	ff.$about.addClass('active');
	ff.$fri.addClass('active');
	ff.$sat.removeClass('active');

	setTimeout(function(){
		$('section.fri div.info').removeClass('out');
	}, 0);

}).on('click', 'section.sat', function(e) {

	l('sat');
	ff.$b.removeClass('about fri');
	ff.$b.addClass('sat lock');

	ff.$about.addClass('active');
	ff.$fri.addClass('active');
	ff.$sat.addClass('active');
	$('section.sat section.info').addClass('out');

	setTimeout(function(){
		$('section.sat div.info').removeClass('out');
	}, 0);

});




var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, (window.innerWidth / 2) / window.innerHeight, 0.1, 1000 );

var geometry1 = new THREE.BoxGeometry( 1, 12.5, 1 );
var geometry2 = new THREE.BoxGeometry( 6, 1, 1 );

var material1 = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: true } );
var material2 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, overdraw: true } );

var line1 = new THREE.Mesh( geometry1, material2 );
var line2 = new THREE.Mesh( geometry1, material2 );
var line3 = new THREE.Mesh( geometry1, material1 );
var line4 = new THREE.Mesh( geometry1, material1 );

var cross1 = new THREE.Mesh( geometry2, material1 );
var cross2 = new THREE.Mesh( geometry2, material1 );
var cross3 = new THREE.Mesh( geometry2, material2 );
var cross4 = new THREE.Mesh( geometry2, material2 );

line1.position.set( -1.35, 0, -0.25 );

line2.position.set( 1, 0, -58 );
line2.scale.set( 2.3,2.3,80 );

line3.position.set( -2.6, 0, 7 );
line3.scale.set( 0.5,0.5,0.5);

line4.position.set( -16.5, 0, -59 );
line4.scale.set( 5,5,10 );
// line4.rotation.y = 0.2;

cross1.position.set( 1.8, 2.4, 8 );
cross1.scale.set( 0.45,0.45,0.45 );

cross2.position.set( 3.9, 3.25, 1 );

cross3.position.set( 0.4, 0.135, 12.6 );
cross3.scale.set( 0.1,0.1,0.1 );

cross4.position.set( 3.95, -0.75, -14.5 );
cross4.scale.set( 1,1,30 );

scene.add( line1, line2, line3, line4, cross1, cross2, cross3, cross4 );
camera.position.z = 14;
camera.position.x = 0;
// camera.rotation.y = -0.3;
// camera.position.x = -0.3;

var renderer = new THREE.CanvasRenderer();
renderer.setClearColor( 0x0000FF, 1);
renderer.setSize( (window.innerWidth / 2), window.innerHeight );
document.body.appendChild( renderer.domElement );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {
	event.preventDefault();
	mouseX = ((event.clientX / (window.innerWidth / 2)) * 2) -1;
	mouseY = ((event.clientY / window.innerHeight) * 2) -1;
	camera.position.x = mouseX * 10;
	camera.position.y = -mouseY * 10;
	camera.rotation.y = mouseX/100;
}



function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}