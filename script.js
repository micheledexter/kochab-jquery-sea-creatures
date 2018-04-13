console.log('js');

$(document).ready(readyNow);

function readyNow() {
	console.log('JQ');
	
	// use jQuery to create 'button' and 'input' elements
	$('body').append('<button id="counterButton">Add one</button><input id="counterInput" value="0" disabled="disabled">');

	// set up an event handler for when the button is clicked for an anonymous callback function
	$('#counterButton').on('click', function() {
		// a complicated way of basically saying "input's value = itself + 1"
		$('#counterInput').val(parseInt($('#counterInput').val()) + 1);
	});
}
