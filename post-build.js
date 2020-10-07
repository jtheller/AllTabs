const fs = require("fs");
const buildDir = `${__dirname}/build`;

const html = fs.readFileSync(`${buildDir}/index.html`, "UTF8");
const scriptLine = html.split("<script>")[1].split("</script>")[0];
const outHtml = html.replace(scriptLine, "").replace("<script>", `<script src="popup.js">`);
const precacheName = fs.readdirSync(buildDir).find(name => name.match(/precache/g));

fs.writeFileSync(`${buildDir}/popup.js`, scriptLine, "UTF8");
fs.writeFileSync(`${buildDir}/popup.html`, outHtml, "UTF8");
fs.unlinkSync(`${buildDir}/index.html`);
fs.unlinkSync(`${buildDir}/asset-manifest.json`);
fs.unlinkSync(`${buildDir}/service-worker.js`);
fs.unlinkSync(`${buildDir}/${precacheName}`);