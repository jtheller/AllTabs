import { env } from "../env";

export const devServer = "jateruy.com";
export const testServer = "jateruy.com";
export const prodServer = "jateruy.com";

const hostDomain = "jateruy.com";
const hostname = env === "local"
  ? window.location.hostname
  : env === "dev"
  ? devServer
  : env === "test"
  ? testServer
  : env === "prod"
  ? prodServer
  : `${env}.${hostDomain}`;
const port = env === "local" ? 8081 : 443;
const https = env !== "local" || window.location.protocol === "https:";
const pathname = "";

export const serverConfig = {
  hostname,
  port,
  https,
  pathname,

  // For hosting with the same hostname, assuming backend is port forwarded to external port 8080 and https, use below
  // hostname: window.location.hostname,
  // port: 8080,
  // https: window.location.protocol.match(/https/g),

  defaultHeaders: {
    Authorization: `Basic ${btoa("jtworks:jtworks")}`
  },
};

export const serverPortString =
  serverConfig.port.toString().match(/^80$|^443$/g)
    ? ""
    : `:${serverConfig.port}`;

export const serverHostnameString = `${
  serverConfig.https ? "https://" : "http://"
  }${serverConfig.hostname}${serverPortString}${serverConfig.pathname}`;

export const baseURL = serverHostnameString;