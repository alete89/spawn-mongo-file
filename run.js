const { spawn } = require("child_process");

spawn("mongo", ["localhost:27017/database", "--quiet", "query.js"]);
