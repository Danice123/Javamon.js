import Game from 'logic/Game.js'
import ControlProcessor from 'logic/ControlProcessor.js'

export default class Display {

	constructor(width, height) {
		var _this = this;
		this.app = new PIXI.Application({width: width, height: height});
		this.app.ticker.add(function(delta) {
			_this.tick(delta);
		});
		this.game = new Game(this);
		this.controlProcessor = new ControlProcessor();
	}

	tick(delta) {
		if (this.screen != undefined) {
			this.controlProcessor.tick(this.screen);
			this.screen.tick(delta);
		}
	}

	setScreen(screen) {
		screen.init(this.app);
		this.screen = screen;
	}
}