var canvas;

window.onresize = function()
{
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;
}

window.onload = function()
{
	canvas = document.getElementById( "game_canvas" );
	window.onresize(); //We call this so we can resize the canvas. Not great practice.
}
