import Key from 'logic/Key.js'

export default class ControlProcessor {

	constructor() {
		this.A = false;
		this.B = false;
		this.start = false;
		this.select = false;
		this.up = false;
		this.down = false;
		this.left = false;
		this.right = false;

		var _this = this;
		window.addEventListener(
			"keydown", function(event) {
				switch (event.key) {
					case 'i':
						_this.up = true;
						event.preventDefault();
						break;
					case 'j':
						_this.left = true;
						event.preventDefault();
						break;
					case 'l':
						_this.right = true;
						event.preventDefault();
						break;
					case 'k':
						_this.down = true;
						event.preventDefault();
						break;
					case 'z':
						_this.A = true;
						event.preventDefault();
						break;
					case 'x':
						_this.B = true;
						event.preventDefault();
						break;
					case 'Enter':
						_this.start = true;
						event.preventDefault();
						break;
					case 'Shift':
						_this.select = true;
						event.preventDefault();
						break;
				}
			},
			false
		);

		window.addEventListener(
			"keyup", function(event) {
				switch (event.key) {
					case 'i':
						_this.up = false;
						event.preventDefault();
						break;
					case 'j':
						_this.left = false;
						event.preventDefault();
						break;
					case 'l':
						_this.right = false;
						event.preventDefault();
						break;
					case 'k':
						_this.down = false;
						event.preventDefault();
						break;
					case 'z':
						_this.A = false;
						event.preventDefault();
						break;
					case 'x':
						_this.B = false;
						event.preventDefault();
						break;
					case 'Enter':
						_this.start = false;
						event.preventDefault();
						break;
					case 'Shift':
						_this.select = false;
						event.preventDefault();
						break;
				}
			},
			false
		);
	}

	tick(screen) {
		if (this.up) {
			screen.input(Key.up);
		}
		if (this.down) {
			screen.input(Key.down);
		}
		if (this.left) {
			screen.input(Key.left);
		}
		if (this.right) {
			screen.input(Key.right);
		}
		if (this.A) {
			screen.input(Key.accept);
			this.A = false;
		}
		if (this.B) {
			screen.input(Key.deny);
			this.A = false;
		}
		if (this.start) {
			screen.input(Key.start);
			this.A = false;
		}
		if (this.select) {
			screen.input(Key.select);
			this.A = false;
		}
	}
}