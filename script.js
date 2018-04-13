console.log('js');

let clickCount = 0;

$(document).ready(readyNow);

function readyNow() {
	console.log('JQ');

	// set up an event handler for when the button is clicked for a callback function 'clickHandler'
	// $('#counterButton').on('click', clickHandler);
	$('#submitCreature').on('click', addNewCreature);
	updateDomCount();
}

// function clickHandler() {
// 	clickCount++;
// 	console.log('Button clicked: ' + clickCount);
// 	updateDomCount();
// }

function updateDomCount() {
	$('#totalCount').text('Total Count: ' + clickCount);
}

function addNewCreature() {
	clickCount++;
	$('#creatures').append(
		'<tr>' +
			'<td>' + $('#creatureName').val() + '</td>' +
			'<td>' + $('#creatureSize').val() + ' ft</td>' +
			'<td>' + $('#creatureType').val() + '</td>' +
			'<td>' + $('#creatureSpeed').val() + ' mph</td>' +
		'</tr>'
	);
	updateDomCount();
}