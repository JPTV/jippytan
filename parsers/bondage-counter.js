class BondageCounter {
	
	constructor() {
		this.count = 0;
	}
	
	parse(message) {
		if (message.content === "bc") {
			return this.increment();
		}
		
		if (message.content === "unbc") {
			return this.decrement();
		}
		
		if (message.content === "count") {
			return this.getCount();
		}
		
		return null;
	}
	
	increment() {
		this.count++;
		return "Increased Counter";
	}
	
	decrement() {
		if (this.count < 1) {
			this.count = 0;
			return "Counter can't go below zero!";
		}
		
		this.count--;
		return "Decreased Counter";
	}
	
	getCount() {
		return this.count.toString();
	}
}

var bc = new BondageCounter();
module.exports = function(message) {
	return bc.parse(message);
}
