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
	if (response) {
		message.channel.send(response);
	}
});

client.login(config.token);