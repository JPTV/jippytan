module.exports = function(message) {
	if (message.content.match(/\bgale\b/i)) {
		return "We spend our whole life trying to stop death. Eating, inventing, loving, praying, "+
		"fighting, killing. But what do we really know about death? Just that nobody comes back. "+
		"Then there comes a point - a moment - in life when your mind outlives its desires, its "+
		"obsessions, when your habits survive your dreams, and when your losses... Maybe death is "+
		"a gift. You wonder. All I can tell you is that by this time tomorrow I'll be dead. I know"+
		" when. I just cannot say why. You have 24 hours to find out.";
	}
	return null;
};