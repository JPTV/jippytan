var sprintf = require('sprintf-js').sprintf;

module.exports = function(message) {
	if (message.content.match(/\bsamson\b/i)) {
		return sprintf("wah %s!",message.author.username);
	}
	return null;
};
