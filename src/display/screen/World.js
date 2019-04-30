import Screen from 'display/screen/Screen.js'
import MapHandler from 'logic/map/MapHandler.js'
import Key from 'logic/Key.js'

export default class World extends Screen {

	constructor(parent) {
		super(parent);
		this.mapHandler = new MapHandler();
	}

	abstract_init(app) {
		this.mapHandler.openMap(app.stage, 'Pallet_Town');
	}

	abstract_tick(delta) {

	}

	handleKey(key) {
		if (key == Key.down) {
			this.mapHandler.moveDown();
		}
	}
}