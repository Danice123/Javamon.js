export default class Screen {

	constructor(parent) {
		this.isChild = false;
		this.renderBehind = false;

		if (parent != undefined) {
			if (parent.child != undefined) {
				throw 'Parent has child already';
			}
			this.isChild = true;
			parent.child = this;
		}
	}

	init(app) {
		this.abstract_init(app);
	}

	abstract_init(app) {
		throw "Missing implementation";
	}

	tick(delta) {
		this.abstract_tick(delta);
		if (this.child != undefined) {
			this.child.tick(delta);
		}
	}

	abstract_tick(delta) {
		throw "Missing implementation";
	}

	input(key) {
		if (this.child != undefined) {
			this.child.input(key);
		} else {
			this.handleKey(key);
		}
	}

	handleKey(key) {

	}

};