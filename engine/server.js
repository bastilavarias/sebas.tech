const express = require("express");
const http = require("http");
const api = require("./api");
const responseFilter = require("./middlewares/response-filter");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createWriteStream } = require("fs");
const { join } = require("path");
const cron = require('node-cron');

const application = express();
const server = http.createServer(application);
application.use(cors());
application.use(
    morgan("combined", {
        stream: createWriteStream(join(__dirname, "access.log"), {
            flags: "a",
        }),
    }),
);
application.use(responseFilter());
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
application.use("/api", api);

cron.schedule('0 6 * * 2,5', async () => {
    require('./app/runPost')
});

const port = 3000;
server.listen(port, () => {
    console.log(`Service running at localhost:${port}`);
});