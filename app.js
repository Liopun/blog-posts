const express       = require("express"),
      bodyParser    = require("body-parser"),
      cors          = require("cors"),
      morgan        = require("morgan"),
      apicache      = require("apicache")

const pingRouter    = require("./routes/api/ping"),
      postsRouter = require("./routes/api/posts");

const app = express();

app.use(cors({origin: "*"}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev")); // logging requests

const acache = apicache.middleware; // caching

app.get("/api/ping", acache("45 minutes"), pingRouter);
app.get("/api/posts", acache("45 minutes"), postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).json("Page Not Found");
});

module.exports = app;