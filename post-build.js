const fs = require("fs");
const buildDir = `${__dirname}/build`;
const html = fs.readFileSync(`${buildDir}/index.html`, "UTF8");
const precacheName = fs.readdirSync(buildDir).find(name => name.match(/precache/g));

fs.writeFileSync(`${buildDir}/popup.html`, html, "UTF8");
fs.unlinkSync(`${buildDir}/index.html`);
fs.unlinkSync(`${buildDir}/asset-manifest.json`);
fs.unlinkSync(`${buildDir}/service-worker.js`);
fs.unlinkSync(`${buildDir}/${precacheName}`);