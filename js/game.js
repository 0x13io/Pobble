var canvas;
var context;

var keys = {};

var cannon_ang = -(Math.PI/2);

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
	if ( w < cw )
	{
		h = ch;
	}
	if ( h < ch )
	{
		w = cw;
	}
	var hw = w/2;
	var hh = h/2;

	//Clear before drawing.
	context.clearRect( 0, 0, cw, ch );

	//Background
	context.beginPath();
	context.rect( 0, 0, cw, ch );
	context.fillStyle = "#000";
	context.fill();

	context.translate( hcw-hw, hch-hh );

	//Stage Background
	context.beginPath();
	context.rect( 0, 0, w, h );
	context.fillStyle = "#FFF";
	context.fill();

	//Update cannon
	var turnrate = 0.02;
	if ( keys[ 37 ] )
	{
		cannon_ang -= turnrate;
	}
	if ( keys[ 39 ] )
	{
		cannon_ang += turnrate;
	}

	//Gun cannon
	context.beginPath();
	context.translate( hw, h );
	context.rotate( cannon_ang );
	context.rect( (h/15), -(h/30)/2, (h/10), (h/30) );
	context.rotate( -cannon_ang );
	context.translate( -hw, -h );
	context.fillStyle = "#F00";
	context.fill();

	//Gun rails
	context.beginPath();
	context.rect( 0, h-(h/30), w, (h/30) );
	context.fillStyle = "#FAA";
	context.fill();

	//Gun body
	context.beginPath();
	context.arc( hw, h, (h/10), 0, Math.PI*2, false );
	context.fillStyle = "#FAA";
	context.fill();

	context.translate( -(hcw-hw), -(hch-hh) );

	window.requestAnimationFrame( paint );
}

window.onresize = function()
{
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;
}

window.onkeydown = function( e )
{
	if ( !keys[ e.keyCode ] )
	{
		keys[ e.keyCode ] = true;
	}
	e.preventDefault();
}

window.onkeyup = function( e )
{
	delete keys[ e.keyCode ];
	e.preventDefault();
}

window.onload = function()
{
	canvas = document.getElementById( "game_canvas" );
	context = canvas.getContext( "2d" );
	window.onresize(); //We call this so we can resize the canvas. Not great practice.
	paint();
}
