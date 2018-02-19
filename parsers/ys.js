module.exports = function(message) {
	if (message.content.match(/\bys\b/i)) {
		return "Fight giant munstahs!";
	}
	return null;
};
