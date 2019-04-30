require('pixi-tiledmap')

var baseUrl = '/assets/maps/';

export default class MapData {

	constructor(mapName) {
		this.mapName = mapName;
	}

	async loadMap() {
		this.mapObject = await this.loadTiledMap(this.mapName);
		this.mapObject.visible = false;
	}

	async loadTiledMap(mapName) {
		return new Promise(function(resolve, reject) {
			PIXI.loader.add(baseUrl + mapName + '/map.tmx').load(function() {
				var mapObject = new PIXI.extras.TiledMap(baseUrl + mapName + '/map.tmx');
				resolve(mapObject);
			});
		});
	}
}