var canvas;
var context;

function paint()
{
	var cw = canvas.width; //Make these variables easy to get to.
	var ch = canvas.height;
	var hcw = cw/2;
	var hch = ch/2;

	var aspect_x = 2;
	var aspect_y = 3;

	var w = ( ch / aspect_y ) * aspect_x;
 	var h = ( cw / aspect_x ) * aspect_y;
	var hw = w/2;
	var hh = h/2;

	//Clear before drawing.
	context.clearRect( 0, 0, cw, ch );

	//Background
	context.beginPath();
	context.rect( 0, 0, cw, ch );
	context.fillStyle = "#000";
	context.fill();

	//Stage Background
	context.beginPath();
	context.rect( hcw-hw, hch-hh, w, h );
	context.fillStyle = "#FFF";
	context.fill();

	window.requestAnimationFrame( paint );
}

window.onresize = function()
{
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;
}

window.onload = function()
{
	canvas = document.getElementById( "game_canvas" );
	context = canvas.getContext( "2d" );
	window.onresize(); //We call this so we can resize the canvas. Not great practice.
	paint();
}
