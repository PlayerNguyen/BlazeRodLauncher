const { platform } = require("process");
/**
 * Check the platform whether it is a Windows
 * @returns true whether the current platform is Windows
 */
function isWindows() {
  return platform === "win32";
}
/**
 * Check the platform whether it is a Mac
 * @returns true whether the current platform is Mac
 */
function isMac() {
  return platform === "darwin";
}

const OperationSystem = {
  isWindows,
  isMac,
};

module.exports = OperationSystem;
