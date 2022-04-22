const fetch = require("node-fetch");
const Constants = require("./constants");

/**
 * Response a version list from Mojang.
 */
async function getVersions() {
  const response = await fetch(Constants.Url.VersionList);
  const json = await response.json();
  return json.versions;
}

const Mojang = {
  getVersions,
};
module.exports = Mojang;
