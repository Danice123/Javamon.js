import Display from 'display/Display.js'

window.onload = function () {
	var display = new Display(160, 144);
	document.body.appendChild(display.app.view);
};