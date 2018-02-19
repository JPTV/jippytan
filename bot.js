const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const chain = require("./chain.js");

client.on("ready", () => {
	console.log("I am ready!");
});

client.on("message", (message) => {
	if (message.author.bot) return;
	var response = chain.parse(message);
	if (!response) {
		return;
	}
	
	if (typeof response === "string") {
		message.channel.send(response);
	}
	
	if (Array.isArray(response)) {
		for (var i in response) {
			message.channel.send(response[i]);
		}
	}
});

client.login(config.token);