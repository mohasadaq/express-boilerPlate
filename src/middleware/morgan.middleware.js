const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const logStream = fs.createWriteStream(path.join(__dirname, "../morgan.log")); // prepare stream and write for it
const morganMiddleware = morgan("combined", { stream: logStream }); // use log stream variable

module.exports = morganMiddleware;
