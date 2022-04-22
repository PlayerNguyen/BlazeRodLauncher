const fs = require("fs");
const path = require("path");
const { getConfigHome } = require("platform-folders");
const Configuration = require("./configurations/configuration");
const Connection = require("./connection");

/**
 *
 * @returns the configuration directory to store the configuration file
 */
function getCacheDirectory() {
  return path.join(getConfigHome(), "blazed-rod-launcher");
}

/**
 * Load the file system module
 */
function loadConfiguration() {
  const cacheDirectory = getCacheDirectory();

  // Construct a default configuration directory
  if (!fs.existsSync(cacheDirectory)) {
    fs.mkdirSync(cacheDirectory);
  }

  // Create default configuration file whether not exists
  const configurationFilePath = path.join(cacheDirectory, "configuration.json");
  if (!fs.existsSync(configurationFilePath)) {
    writeJsonFile(configurationFilePath, Configuration);
  }

  // Whether the configuration file exists, validate it
  refreshConfiguration();
}

/**
 * Validates and refreshes the configuration file.
 * If the configuration file is old or invalid, it will be regenerated.
 */
function refreshConfiguration() {
  const cacheDirectory = getCacheDirectory();
  const configurationFilePath = path.join(cacheDirectory, "configuration.json");
  const configuration = JSON.parse(fs.readFileSync(configurationFilePath));

  // Patch the configuration
  for (const key in Configuration) {
    if (configuration[key] === undefined) {
      configuration[key] = Configuration[key];
    }
  }

  // Save the configuration
  writeJsonFile(configurationFilePath, configuration);
}

/**
 * Generates and puts the json file.
 *
 * @param {*} path a file path to create
 *
 * @param {*} object an object to put into the file
 * @returns the function which generates the file
 */
function writeJsonFile(path, object) {
  return fs.writeFileSync(path, JSON.stringify(object, null, 2));
}

/**
 * Get the configuration value from key.
 * This method retrieves configuration file and return the value.
 *
 * @param {*} key a key to retrieve the value
 * @returns retrieve the value of the key
 */
function getConfiguration(key) {
  const cacheDirectory = getCacheDirectory();
  const configurationFilePath = path.join(cacheDirectory, "configuration.json");
  const configuration = JSON.parse(fs.readFileSync(configurationFilePath));

  return configuration[key];
}

function loadVersionFileIfNotExists() {
  const cacheDirectory = getCacheDirectory();
  const versionFilePath = path.join(cacheDirectory, "versions.json");

  if (!Connection.isDeviceOnline()) {
  }
}

module.exports = { loadConfiguration, loadVersionFileIfNotExists };
