const fs = require("fs");
const buildDir = `${__dirname}/build`;

const jsPath = buildDir + "/static/js/";
const files = fs.readdirSync(jsPath);
const maps = files.filter(f => !!f.match(/\.map$/g));
for (const filename of maps) {
  console.log(`Source map ${filename} removal.`);
  fs.unlinkSync(`${jsPath}${filename}`);
}
const jsFiles = files.filter(f => !!f.match(/\.js$/g));
for (const filename of jsFiles) {
  console.log(`File ${filename} source map comment removal.`);
  const sourceCode = fs.readFileSync(`${jsPath}${filename}`, "UTF-8");
  const modified = sourceCode.replace(/\/\/# sourceMappingURL=(.*)$/g, "");
  fs.writeFileSync(`${jsPath}${filename}`, modified, "UTF-8");
}

const cssPath = buildDir + "/static/css/";
const stylesheets = fs.readdirSync(cssPath);
const cssMaps = stylesheets.filter(f => !!f.match(/\.map$/g));
for (const filename of cssMaps) {
  console.log(`CSS source map ${filename} removal.`);
  fs.unlinkSync(`${cssPath}${filename}`);
}
const cssFiles = stylesheets.filter(f => !!f.match(/\.css$/g));
for (const filename of cssFiles) {
  console.log(`Stylesheet ${filename} source map comment removal.`);
  const sourceCode = fs.readFileSync(`${cssPath}${filename}`, "UTF-8");
  const modified = sourceCode.replace(/\/\*# sourceMappingURL=(.*)/g, "");
  fs.writeFileSync(`${cssPath}${filename}`, modified, "UTF-8");
}

console.log("\x1b[92m\nSource maps removed successfully. ", "\x1b[0m");

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