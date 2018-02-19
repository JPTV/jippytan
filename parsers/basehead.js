module.exports = function(message) {
	if (message.content.toLowerCase().startsWith("jippy-tan, you a basehead")) {
		return "Nuh-uh!";
	}
	return null;
};
