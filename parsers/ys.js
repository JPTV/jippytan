module.exports = function(message) {
	if (message.content.toLowerCase().indexOf("ys") !== -1) {
		return "Fight giant munstahs!";
	}
	return null;
};
