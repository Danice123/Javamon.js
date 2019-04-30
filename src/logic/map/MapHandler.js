require('pixi-tiledmap')

import MapData from 'logic/map/MapData.js'

export default class MapHandler {

	constructor() {
		this.mapCache = {};
	}

	async openMap(stage, mapName) {
		if (this.map != undefined) {
			this.mapCache[this.map].mapObject.visible = false;
		}

		await this.getMap(stage, mapName);
		this.map = mapName;
		this.mapCache[this.map].mapObject.visible = true;
	}

	async getMap(stage, mapName) {
		if (this.mapCache[mapName] == undefined) {
			var map = new MapData(mapName);
			await map.loadMap();
			this.mapCache[mapName] = map;
			stage.addChild(map.mapObject);
		}
		return this.mapCache[mapName];
	}

	moveDown() {
		this.mapCache[this.map].mapObject.y = this.mapCache[this.map].mapObject.y + 1;
	}

}