module.exports = function(message) {
	if (message.content.startsWith("ping")) {
		return "pong!";
	}
	return null;
};
