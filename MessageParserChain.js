module.exports = class MessageParserChain {
	
	constructor() {
		this.parsers = [];
	}
	
	addParser( parser ) {
		this.parsers.push(parser);
	}
	
	parse( message ) {
		for( var i in this.parsers ) {
			var response = this.parsers[i]( message );
			if( response !== null ) {
				return response;
			}
		}
		
		return null;
	}
	
}
