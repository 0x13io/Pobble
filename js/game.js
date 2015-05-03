var canvas;
var context;

function paint()
{
	var cw = canvas.width; //Make these variables easy to get to.
	var ch = canvas.height;

	//Clear before drawing.
	context.clearRect( 0, 0, cw, ch );

	//Background
	context.beginPath();
	context.rect( 0, 0, cw, ch );
	context.fillStyle = "#000";
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
