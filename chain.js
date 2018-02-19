const MessageParserChain = require("./MessageParserChain.js");
const chain = new MessageParserChain();

chain.addParser(require("./parsers/ping.js"));
chain.addParser(require("./parsers/bondage-counter.js"));
chain.addParser(require("./parsers/samson.js"));
chain.addParser(require("./parsers/cheerup.js"));
chain.addParser(require("./parsers/gale.js"));
chain.addParser(require("./parsers/ys.js"));
chain.addParser(require("./parsers/basehead.js"));

module.exports = chain;
