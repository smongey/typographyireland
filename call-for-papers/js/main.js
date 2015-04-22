// set noise
// https://github.com/josephg/noisejs
var noise = window.noise;
noise.seed(Math.random());

var svg = [/*'svgA', 'svgB', 'svgC', 'svgD', 'svgE', 'svgG', 'svgH', 'svgI', 'svgJ', 'svgK', 'svgM', 'svgN', 'svgO', 'svgP', 'svgQ', 'svgS', 'svgW', 'svgV', 'svgX', 'svgZ'*/ 'svgR'];

// var rand = Math.floor(Math.random() * svg.length);
// console.log(rand);


var a, paths;

function pickLetter() {
    //import the svg
    a = project.importSVG(document.getElementById(svg[Math.floor(Math.random() * svg.length)]));
    a.visible = true; // Turn off the effect of display:none;
    a.fillColor = 'white';
    a.opacity = 1;
    a.position.x = view.center.x - view.bounds.width / 4;
    a.position.y = view.center.y;
    a.scale(1.8);
    //a.selected = true;
    if (a.children[0].children[0].children) {
        paths = a.children[0].children[0].children;
    } else {
        paths = a.children[0].children;
    }
    
    return a, paths;
}

pickLetter();

// get paths of the svg
// console.log(a);

var m = new Point(0,0);

// catch mousemove
function onMouseMove(e){
    m = e.point;
}

//paths[0].insert(1, new Point(100, 100));

var noiseCounter = 0;

function everyPoint(segmentCallback, pathCallback){
    
    for(var i = 0; i < paths.length; ++i){
        
        var path = paths[i];
        
        for(var j = 0; j < path.segments.length; ++j){
            
            var segment = path.segments[j];
            
            if (segmentCallback) segmentCallback(segment, j);
            
        }
        
        if(pathCallback) pathCallback(path);
        
    }
}

everyPoint(function(segment){
    
    segment.originalPosition = new Point(segment.point.x, segment.point.y);
    
    segment.noiseStart = Math.random() * 300000;
    
});



var can = document.getElementById('c');
can.addEventListener('click', function(){

    console.log(svg[Math.floor(Math.random() * svg.length)]);
    console.log(a);
    project.clear();
    pickLetter();

    var m = new Point(0,0);
    var noiseCounter = 0;

    everyPoint(function(segment){
        
        segment.originalPosition = new Point(segment.point.x, segment.point.y);
        
        segment.noiseStart = Math.random() * 300000;
        
    });

});



function onFrame(){


    noiseCounter += 0.01;
    
    //if (noiseCounter > 1) noiseCounter = 0;

    everyPoint(function(segment, j){
        
        var perlinX = noise.perlin2(noiseCounter + segment.noiseStart, 0);
        var perlinY = noise.perlin2(0, noiseCounter + segment.noiseStart);
        
        segment.point.x = segment.originalPosition.x + (perlinX * ( ( (m.x / (window.innerWidth / 2) - .5 ) * 700)));
        segment.point.y = segment.originalPosition.y + (perlinY * ( ( (m.y / window.innerHeight - .5 ) * 700)));
        //segment.point.y += (perlin.y - .5 ) * (( m.y / window.innerHeight ) * 20);
        
    }, function(path){
        //path.smooth();        
    });   
}