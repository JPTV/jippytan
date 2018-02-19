var sprintf = require('sprintf-js').sprintf;

module.exports = function(message) {
	
	var match = message.content.match(/do (.*) count\?/i);
	if (!match) {
		return null;
	}
	
	var thing = match[1];
	return [
		"I dunno, you tell me!",
		sprintf("_%s %s_",thing,message.author.username)
	];
	
};
