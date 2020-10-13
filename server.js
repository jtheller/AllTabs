const express = require("express"),
  app = express(),
  fs = require ("fs"),
  compression = require('compression'),
  WEB_SERVER_ROOT = `${__dirname}/build/`,
  madgeDiagramFile = `${__dirname}/madge.png`,
  EXTERNAL_PORT = process.env.PORT || 8000;
app.use(compression());
app.use(express.static(WEB_SERVER_ROOT));
app.get("/api/madge_diagram", (req, res) => res.sendFile(madgeDiagramFile));
app.get("*", (req, res) => res.sendFile(`${WEB_SERVER_ROOT}popup.html`));
console.log(
  "Frontend server serving optimized build on port " + EXTERNAL_PORT + "."
);
app.listen(EXTERNAL_PORT);
