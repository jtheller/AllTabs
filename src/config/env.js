export const env =
  window.location.protocol.match(/chrome/g)
    ? "prod"
    : "dev";