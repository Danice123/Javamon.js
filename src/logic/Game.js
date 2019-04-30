import World from 'display/screen/World.js'

export default class Game {

	constructor(display) {
		this.display = display;
		this.display.setScreen(new World());
	}

}