const MessageParserChain = require("./MessageParserChain.js");
const chain = new MessageParserChain();

chain.addParser(require("./parsers/ping.js"));
chain.addParser(require("./parsers/bondage-counter.js"));

module.exports = chain;
