var sprintf = require('sprintf-js').sprintf;

module.exports = function(message) {
	if (message.content.toLowerCase().indexOf("._.") !== -1) {
		return [
			sprintf("Cheer up, %s!",message.author.username),
			sprintf("_huggles %s_",message.author.username)
		];
	}
	return null;
};
