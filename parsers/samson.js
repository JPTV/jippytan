var sprintf = require('sprintf-js').sprintf;

module.exports = function(message) {
	if (message.content.toLowerCase().indexOf("samson") !== -1) {
		return sprintf("wah %s!",message.author.username);
	}
	return null;
};
