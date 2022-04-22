/**
 * Checks if the given connection is valid.
 * @returns  true if the connection is successful, false otherwise.
 */
function isDeviceOnline() {
  return navigator.onLine;
}

const Connection = {
  isDeviceOnline,
};
module.exports = Connection;
